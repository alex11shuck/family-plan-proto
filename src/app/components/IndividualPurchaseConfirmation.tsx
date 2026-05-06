import { Link } from "react-router";

export function IndividualPurchaseConfirmation() {
  return (
    <div className="bg-white overflow-clip relative size-full flex items-center justify-center">
      <div className="bg-white overflow-clip relative rounded-[24px] w-[375px] h-[812px] border-2 border-[#1a1a1a]">
        {/* Status Bar */}
        <div className="absolute h-[44px] left-0 top-0 w-full">
          <div className="absolute left-[21px] top-[14px]">
            <p className="font-['SF_Pro_Text:Regular',sans-serif] text-[15px] text-[#1a1a1a]">9:41</p>
          </div>
          <div className="absolute right-[21px] top-[14px] flex gap-[4px] items-center">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <rect width="16" height="10" rx="1" fill="#1a1a1a"/>
            </svg>
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <rect x="0.5" y="0.5" width="19" height="9" rx="1.5" stroke="#1a1a1a"/>
              <rect x="2" y="2" width="14" height="6" rx="1" fill="#1a1a1a"/>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div className="absolute left-0 right-0 top-[100px] bottom-0 px-[24px] flex flex-col items-center justify-center">
          {/* Success Icon */}
          <div className="size-[100px] rounded-full bg-gradient-to-br from-[#7500d0] to-[#05c3f9] flex items-center justify-center mb-[32px]">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <path d="M14 28L24 38L42 18" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <h1 className="font-['DIN_OT:Medium',sans-serif] text-[32px] leading-[40px] text-[#1a1a1a] text-center mb-[16px]">
            Welcome to Elevate!
          </h1>

          <p className="font-['DIN_OT:Regular',sans-serif] text-[18px] leading-[28px] text-[#606060] text-center mb-[32px]">
            Your Individual Premium is now active. Start training your brain today.
          </p>

          {/* Plan Details */}
          <div className="bg-[#f2f8fa] rounded-[16px] p-[24px] w-full mb-[32px]">
            <div className="flex items-center justify-between mb-[16px]">
              <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#1a1a1a]">
                Individual Annual
              </p>
              <p className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-[#1a1a1a]">
                $39.99/yr
              </p>
            </div>
            <div className="space-y-[12px]">
              <div className="flex items-center gap-[12px]">
                <div className="size-[20px] rounded-full bg-[#05c3f9] flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                  All Premium games
                </p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="size-[20px] rounded-full bg-[#05c3f9] flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                  Personalized training
                </p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="size-[20px] rounded-full bg-[#05c3f9] flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                  No ads
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/family-upsell"
            className="w-full h-[56px] bg-gradient-to-r from-[#7500d0] to-[#05c3f9] rounded-[12px] flex items-center justify-center font-['DIN_OT:Medium',sans-serif] text-[18px] text-white"
          >
            Start Training
          </Link>
        </div>
      </div>
    </div>
  );
}
