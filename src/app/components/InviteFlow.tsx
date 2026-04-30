import { Link, useNavigate } from "react-router";
import { useState } from "react";

export function InviteFlow() {
  const navigate = useNavigate();
  const [emails, setEmails] = useState(["", "", "", "", ""]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleEmailChange = (index: number, value: string) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleSend = () => {
    setShowConfirmation(true);
    setTimeout(() => {
      navigate("/seat-management");
    }, 2000);
  };

  const filledEmails = emails.filter(email => email.trim() !== "").length;

  if (showConfirmation) {
    return (
      <div className="bg-gradient-to-b from-[#7500d0] to-[#301f95] overflow-clip relative size-full flex items-center justify-center">
        <div className="bg-gradient-to-b from-[#7500d0] to-[#301f95] overflow-clip relative rounded-[40px] w-[375px] h-[812px]">
          {/* Status Bar */}
          <div className="absolute h-[47px] left-0 top-0 w-full overflow-clip">
            <div className="absolute left-[21px] top-[14px]">
              <p className="font-['SF_Pro_Text:Semibold',sans-serif] text-[16px] text-white tracking-[-0.32px]">9:41</p>
            </div>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-[24px]">
            <div className="size-[80px] rounded-full bg-white/20 flex items-center justify-center mb-[24px]">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M15 20L18 23L25 16" stroke="#05c3f9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="20" cy="20" r="18" stroke="#05c3f9" strokeWidth="2"/>
              </svg>
            </div>
            <h2 className="font-['DIN_OT:Medium',sans-serif] text-[24px] text-white text-center mb-[12px]">
              Invitations Sent!
            </h2>
            <p className="font-['DIN_OT:Regular',sans-serif] text-[18px] text-[#bbb5ff] text-center">
              {filledEmails} {filledEmails === 1 ? "invitation has" : "invitations have"} been sent to your family members.
            </p>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-white h-[5px] w-[134px] rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#7500d0] to-[#301f95] overflow-clip relative size-full flex items-center justify-center">
      <div className="bg-gradient-to-b from-[#7500d0] to-[#301f95] overflow-clip relative rounded-[40px] w-[375px] h-[812px]">
        {/* Status Bar */}
        <div className="absolute h-[47px] left-0 top-0 w-full overflow-clip">
          <div className="absolute left-[21px] top-[14px]">
            <p className="font-['SF_Pro_Text:Semibold',sans-serif] text-[16px] text-white tracking-[-0.32px]">9:41</p>
          </div>
          <div className="absolute right-[21px] top-[19px] flex gap-[5px] items-center">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
              <rect width="18" height="12" rx="2" fill="white" opacity="0.4"/>
            </svg>
            <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
              <path d="M0 0H17V12H0V0Z" fill="white"/>
            </svg>
            <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
              <rect x="0.5" y="0.5" width="24" height="12" rx="2.5" stroke="white" opacity="0.35"/>
              <rect x="2" y="2" width="21" height="9" rx="1" fill="white"/>
              <path d="M26 5V8C26 8.55228 25.5523 9 25 9V4C25.5523 4 26 4.44772 26 5Z" fill="white" opacity="0.4"/>
            </svg>
          </div>
        </div>

        {/* Back Button */}
        <Link to="/post-purchase" className="absolute left-[24px] top-[59px] size-[24px] z-10">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Header */}
        <div className="absolute left-[24px] right-[24px] top-[100px] text-center">
          <h1 className="font-['DIN_OT:Medium',sans-serif] text-[24px] leading-[32px] text-white mb-[8px]">
            Invite Your Family
          </h1>
          <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] leading-[24px] text-[#bbb5ff]">
            Enter email addresses for up to 5 family members
          </p>
        </div>

        {/* Email Inputs */}
        <div className="absolute left-[24px] right-[24px] top-[200px] space-y-[12px]">
          {emails.map((email, index) => (
            <div key={index} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(index, e.target.value)}
                placeholder={`Family member ${index + 1} email`}
                className="w-full h-[52px] bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-[8px] px-[16px] font-['DIN_OT:Regular',sans-serif] text-[16px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#05c3f9]"
              />
              {email && (
                <button
                  onClick={() => handleEmailChange(index, "")}
                  className="absolute right-[16px] top-1/2 -translate-y-1/2 size-[20px] rounded-full bg-white/20 flex items-center justify-center"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M9 3L3 9M3 3L9 9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Counter */}
        <div className="absolute left-[24px] right-[24px] top-[540px] text-center">
          <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/60">
            {filledEmails} of 5 invitations ready
          </p>
        </div>

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={filledEmails === 0}
          className={`absolute left-[24px] right-[24px] bottom-[90px] h-[56px] flex items-center justify-center rounded-[3px] transition-all ${
            filledEmails > 0 ? "bg-[#05c3f9]" : "bg-white/20"
          }`}
        >
          <span className={`font-['DIN_OT:Medium',sans-serif] text-[18px] ${
            filledEmails > 0 ? "text-[#f2fcfe]" : "text-white/40"
          }`}>
            Send Invitations
          </span>
        </button>

        {/* Skip */}
        <Link
          to="/seat-management"
          className="absolute left-[24px] right-[24px] bottom-[40px] h-[40px] flex items-center justify-center"
        >
          <span className="font-['DIN_OT:Regular',sans-serif] text-[16px] text-white/80">
            Skip for Now
          </span>
        </Link>

        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-white h-[5px] w-[134px] rounded-full" />
      </div>
    </div>
  );
}
