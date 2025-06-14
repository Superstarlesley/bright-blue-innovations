
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface BookingNotificationRequest {
  customerName?: string;
  customerEmail?: string;
  meetingType?: string;
  scheduledTime?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { customerName, customerEmail, meetingType, scheduledTime }: BookingNotificationRequest = await req.json();

    console.log("Sending booking notification:", { customerName, customerEmail, meetingType, scheduledTime });

    // Send notification to company email
    const emailResponse = await resend.emails.send({
      from: "Motswana Intelligence <onboarding@resend.dev>",
      to: ["superstarlesley@gmail.com"],
      subject: "New Meeting Booking - Motswana Intelligence",
      html: `
        <h2>New Meeting Booking</h2>
        <p>A new meeting has been booked through your website.</p>
        
        <h3>Booking Details:</h3>
        <ul>
          <li><strong>Customer Name:</strong> ${customerName || 'Not provided'}</li>
          <li><strong>Customer Email:</strong> ${customerEmail || 'Not provided'}</li>
          <li><strong>Meeting Type:</strong> ${meetingType || 'General consultation'}</li>
          <li><strong>Scheduled Time:</strong> ${scheduledTime || 'To be confirmed'}</li>
        </ul>
        
        <p>Please check your Calendly dashboard for full details and to prepare for the meeting.</p>
        
        <p>Best regards,<br>Motswana Intelligence Booking System</p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
