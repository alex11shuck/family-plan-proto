import { Link } from "react-router";
import { useState } from "react";

export function PremiumTabOption3() {
  const [sharingEnabled, setSharingEnabled] = useState(true);
  const [showSupportForm, setShowSupportForm] = useState(false);
  const [androidMemberName, setAndroidMemberName] = useState("");
  const [androidMemberEmail, setAndroidMemberEmail] = useState("");

  // Mock Android members
  const androidMembers = [
    { name: "Jordan Smith", email: "jordan.s@email.com", expiresDate: "May 30, 2027" },
    { name: "Taylor Kim", email: "taylor.k@email.com", expiresDate: "May 30, 2027" },
  ];

  const handleSubmitSupport = () => {
    setShowSupportForm(false);
    alert(`Request submitted for ${androidMemberName} (${androidMemberEmail})`);
    setAndroidMemberName("");
    setAndroidMemberEmail("");
  };

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
        <Link to="/option3" className="absolute left-[24px] top-[59px] size-[24px] z-10">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>

        {/* Header */}
        <div className="absolute left-0 right-0 top-[100px] text-center">
          <h1 className="font-['DIN_OT:Medium',sans-serif] text-[24px] leading-[32px] text-white px-[24px]">
            Premium Benefits
          </h1>
        </div>

        {/* Toggle Sharing State Button (for demo) */}
        <button
          onClick={() => setSharingEnabled(!sharingEnabled)}
          className="absolute right-[24px] top-[150px] h-[32px] px-[12px] bg-white/20 backdrop-blur-sm rounded-[16px] font-['DIN_OT:Regular',sans-serif] text-[12px] text-white border border-white/30 z-10"
        >
          Toggle iOS (Demo)
        </button>

        {/* Premium Badge */}
        <div className="absolute left-[24px] right-[24px] top-[180px]">
          <div className="bg-gradient-to-br from-[#05c3f9] to-[#B872FF] rounded-[16px] p-[20px] text-center">
            <div className="size-[60px] rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-[12px]">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L20 10L29 11L22.5 17L24 26L16 22L8 26L9.5 17L3 11L12 10L16 2Z" fill="white"/>
              </svg>
            </div>
            <h2 className="font-['DIN_OT:Medium',sans-serif] text-[20px] text-white mb-[4px]">
              Elevate Premium
            </h2>
            <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">
              Active until May 30, 2027
            </p>
          </div>
        </div>

        {/* Settings List - Scrollable */}
        <div className="absolute left-[24px] right-[24px] top-[360px] bottom-[60px] overflow-y-auto no-scrollbar">
          {/* Family Plan - iOS Members */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[16px] border border-white/20 mb-[16px]">
            <div className="flex items-start gap-[12px] mb-[16px]">
              <div className="size-[40px] rounded-full bg-gradient-to-br from-[#05c3f9] to-[#B872FF] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16 7C16 5.67392 15.4732 4.40215 14.5355 3.46447C13.5979 2.52678 12.3261 2 11 2C9.67392 2 8.40215 2.52678 7.46447 3.46447C6.52678 4.40215 6 5.67392 6 7C6 8.32608 6.52678 9.59785 7.46447 10.5355C8.40215 11.4732 9.67392 12 11 12C12.3261 12 13.5979 11.4732 14.5355 10.5355C15.4732 9.59785 16 8.32608 16 7Z" fill="white"/>
                  <path d="M11 14C8 14 2 15.5 2 18.5V20H20V18.5C20 15.5 14 14 11 14Z" fill="white"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white mb-[4px]">
                  iOS Family Members
                </p>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff] mb-[12px]">
                  Via Apple Family Sharing
                </p>

                {sharingEnabled ? (
                  <>
                    <div className="bg-[#05c3f9]/20 border border-[#05c3f9]/40 rounded-[8px] p-[12px] mb-[12px]">
                      <div className="flex items-start gap-[8px]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[2px]">
                          <circle cx="8" cy="8" r="7" fill="#05c3f9"/>
                          <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="font-['DIN_OT:Regular',sans-serif] text-[13px] leading-[18px] text-white">
                          Sharing is enabled. Family members in your Apple Family Group have access.
                        </p>
                      </div>
                    </div>
                    <button className="w-full h-[44px] bg-white/20 hover:bg-white/30 rounded-[8px] font-['DIN_OT:Medium',sans-serif] text-[14px] text-white flex items-center justify-center gap-[8px]">
                      <span>Manage in iOS Settings</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="bg-[#ff9500]/20 border border-[#ff9500]/40 rounded-[8px] p-[12px] mb-[12px]">
                      <div className="flex items-start gap-[8px]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[2px]">
                          <circle cx="8" cy="8" r="7" stroke="#ff9500" strokeWidth="2"/>
                          <path d="M8 4V8M8 11H8.01" stroke="#ff9500" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <p className="font-['DIN_OT:Regular',sans-serif] text-[13px] leading-[18px] text-white">
                          Sharing is not yet enabled.
                        </p>
                      </div>
                    </div>
                    <Link
                      to="/option3/post-purchase"
                      className="w-full h-[44px] bg-[#05c3f9] hover:bg-[#04b3e8] rounded-[8px] font-['DIN_OT:Medium',sans-serif] text-[14px] text-white flex items-center justify-center gap-[8px]"
                    >
                      <span>Open iOS Settings</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4L10 8L6 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Android Family Members Section (NEW) */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[16px] border border-white/20 mb-[16px]">
            <div className="flex items-start gap-[12px] mb-[16px]">
              <div className="size-[40px] rounded-full bg-[#ff9500] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3.33334 7.77778C3.33334 7.42725 3.47385 7.09116 3.72334 6.84444C3.97282 6.59773 4.31305 6.45833 4.66668 6.45833H15.3333C15.687 6.45833 16.0272 6.59773 16.2767 6.84444C16.5262 7.09116 16.6667 7.42725 16.6667 7.77778V16.2222C16.6667 16.5727 16.5262 16.9088 16.2767 17.1555C16.0272 17.4023 15.687 17.5417 15.3333 17.5417H4.66668C4.31305 17.5417 3.97282 17.4023 3.72334 17.1555C3.47385 16.9088 3.33334 16.5727 3.33334 16.2222V7.77778Z" stroke="white" strokeWidth="1.5"/>
                  <path d="M6.66666 6.45833V4.83333C6.66666 3.94928 7.01785 3.10143 7.64297 2.47631C8.26809 1.85119 9.11594 1.5 10 1.5C10.8841 1.5 11.7319 1.85119 12.357 2.47631C12.9822 3.10143 13.3333 3.94928 13.3333 4.83333V6.45833" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white mb-[4px]">
                  Android Family Members
                </p>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff] mb-[12px]">
                  Granted via support
                </p>

                {androidMembers.length > 0 && (
                  <div className="space-y-[8px] mb-[12px]">
                    {androidMembers.map((member, index) => (
                      <div key={index} className="bg-white/10 rounded-[8px] p-[12px]">
                        <p className="font-['DIN_OT:Medium',sans-serif] text-[14px] text-white mb-[2px]">
                          {member.name}
                        </p>
                        <p className="font-['DIN_OT:Regular',sans-serif] text-[12px] text-[#bbb5ff] mb-[4px]">
                          {member.email}
                        </p>
                        <p className="font-['DIN_OT:Regular',sans-serif] text-[11px] text-white/60">
                          Expires {member.expiresDate}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  onClick={() => setShowSupportForm(true)}
                  className="w-full h-[44px] bg-[#ff9500] hover:bg-[#e68600] rounded-[8px] font-['DIN_OT:Medium',sans-serif] text-[14px] text-white flex items-center justify-center gap-[8px]"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3V13M3 8H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span>Add Another Android Member</span>
                </button>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-[12px]">
            <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[16px] border border-white/20">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2L12.5 7L18 8L14 12L15 18L10 15L5 18L6 12L2 8L7.5 7L10 2Z" fill="white" opacity="0.8"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white mb-[2px]">
                    All Premium Games
                  </p>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff]">
                    Unlimited access
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-[12px] p-[16px] border border-white/20">
              <div className="flex items-center gap-[12px]">
                <div className="size-[40px] rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="4" width="14" height="14" rx="2" fill="white" opacity="0.8"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white mb-[2px]">
                    Daily Crossword
                  </p>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#bbb5ff]">
                    New puzzle each day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-[8px] left-1/2 -translate-x-1/2 bg-white h-[5px] w-[134px] rounded-full" />

        {/* Support Form Modal */}
        {showSupportForm && (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center px-[24px] z-50">
            <div className="bg-gradient-to-b from-[#7500d0] to-[#301f95] rounded-[20px] p-[24px] w-full max-w-[327px] border-2 border-white/20">
              <h3 className="font-['DIN_OT:Medium',sans-serif] text-[20px] leading-[28px] text-white text-center mb-[12px]">
                Add Android Family Member
              </h3>
              <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] leading-[20px] text-[#bbb5ff] text-center mb-[24px]">
                We'll email them within 1 business day with setup instructions
              </p>

              <div className="space-y-[12px] mb-[24px]">
                <input
                  type="text"
                  value={androidMemberName}
                  onChange={(e) => setAndroidMemberName(e.target.value)}
                  placeholder="Family member's name"
                  className="w-full h-[48px] bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-[8px] px-[16px] font-['DIN_OT:Regular',sans-serif] text-[16px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#05c3f9]"
                />
                <input
                  type="email"
                  value={androidMemberEmail}
                  onChange={(e) => setAndroidMemberEmail(e.target.value)}
                  placeholder="Family member's email"
                  className="w-full h-[48px] bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-[8px] px-[16px] font-['DIN_OT:Regular',sans-serif] text-[16px] text-white placeholder:text-white/40 focus:outline-none focus:border-[#05c3f9]"
                />
              </div>

              <div className="flex flex-col gap-[12px]">
                <button
                  onClick={handleSubmitSupport}
                  disabled={!androidMemberName || !androidMemberEmail}
                  className={`h-[48px] rounded-[8px] font-['DIN_OT:Demi',sans-serif] text-[16px] text-white ${
                    androidMemberName && androidMemberEmail ? "bg-[#ff9500]" : "bg-white/20"
                  }`}
                >
                  Submit Request
                </button>
                <button
                  onClick={() => {
                    setShowSupportForm(false);
                    setAndroidMemberName("");
                    setAndroidMemberEmail("");
                  }}
                  className="h-[40px] font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
