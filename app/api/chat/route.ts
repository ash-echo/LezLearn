import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    // Check if OpenRouter API key is available
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json({
        error: 'OpenRouter API key not configured. Please add OPENROUTER_API_KEY to your environment variables.'
      }, { status: 500 });
    }

    console.log('Attempting OpenRouter API call with Gemma 3 27B model...');

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3006',
        'X-Title': 'EduCinematic',
      },
      body: JSON.stringify({
        model: 'google/gemma-3-27b-it:free',
        messages: [
          {
            role: 'system',
            content: `You are an AI assistant for EduCinematic, a comprehensive online learning platform similar to Udemy that offers courses across multiple disciplines and skill areas.

About EduCinematic:
- We offer courses in technology, business, creative arts, personal development, marketing, programming, design, and many other subjects
- Our platform features interactive video lessons, real-time collaboration tools, AI-powered feedback, progress tracking, and hands-on projects
- We serve all skill levels from beginners to advanced professionals across various industries
- We provide industry-standard training with certificates and mentorship from expert instructors
- Our pricing includes free access to basic features and premium subscription plans for unlimited course access
- We have over 50,000 active learners with a 98% course completion rate and 4.9-star rating
- Students can learn at their own pace with lifetime access to purchased courses
- We offer both individual courses and subscription-based learning paths

Your role:
- Be helpful, friendly, and professional - like a knowledgeable learning advisor
- Provide accurate information about our diverse course catalog, platform features, and pricing
- Help users discover courses that match their interests and career goals
- KEEP RESPONSES SHORT AND CONCISE - maximum 2-3 sentences
- Use a modern, accessible tone that's friendly but brief
- If you don't know specific details, guide users to contact support or explore the website
- Use emojis sparingly (max 1-2 per response)
- Get straight to the point - no lengthy explanations

IMPORTANT: Keep all responses under 50 words when possible. Be direct and helpful without being verbose.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 80,
        temperature: 0.6,
        top_p: 0.9
      }),
    });

    console.log('OpenRouter API response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenRouter API error response:', errorText);
      throw new Error(`OpenRouter API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    console.log('OpenRouter API response received');
    
    const botMessage = data.choices[0]?.message?.content || "I'm having trouble processing that request. Please try again or contact our support team.";

    return NextResponse.json({ message: botMessage });

  } catch (error) {
    console.error('Chat API error:', error);
    
    // Fallback to smart responses if API fails
    try {
      const requestBody = await req.clone().json();
      const userMessage = requestBody.message || '';
      const fallbackResponse = getFallbackResponse(userMessage);
      return NextResponse.json({ message: fallbackResponse });
    } catch {
      return NextResponse.json({ message: "I can help with courses, pricing, and features. What interests you?" });
    }
  }
}

function getFallbackResponse(userMessage: string): string {
  const message = userMessage?.toLowerCase() || '';
  
  if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
    return "We offer individual courses and unlimited subscriptions! Free courses available too";
  } else if (message.includes('course') || message.includes('learn') || message.includes('study') || message.includes('subject')) {
    return "Thousands of courses in tech, business, arts, and more! What interests you?";
  } else if (message.includes('feature') || message.includes('what') || message.includes('how')) {
    return "HD videos, certificates, mobile app, lifetime access, and progress tracking!";
  } else if (message.includes('contact') || message.includes('support') || message.includes('help')) {
    return "Contact our support team via the website or email us directly!";
  } else if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hey there! Welcome to EduCinematic. What would you like to learn?";
  } else if (message.includes('thank') || message.includes('thanks')) {
    return "You're welcome! Happy learning!";
  } else if (message.includes('certificate') || message.includes('completion')) {
    return "Yes! Get certificates for every completed course. Great for LinkedIn!";
  } else {
    return "I can help with courses, pricing, and features. What interests you?";
  }
}