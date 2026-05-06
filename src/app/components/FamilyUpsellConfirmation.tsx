import { Link } from "react-router";

export function FamilyUpsellConfirmation() {
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
          {/* Success Icon with Confetti */}
          <div className="relative mb-[32px]">
            <div className="size-[120px] rounded-full bg-gradient-to-br from-[#7500d0] to-[#05c3f9] flex items-center justify-center">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <path d="M16 32L28 44L48 20" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* Confetti Elements */}
            <div className="absolute top-0 left-[-20px] size-[12px] rounded-full bg-[#ff9500]" />
            <div className="absolute top-[10px] right-[-15px] size-[8px] rounded-full bg-[#34c759]" />
            <div className="absolute bottom-[20px] left-[-25px] size-[10px] rounded-full bg-[#B872FF]" />
            <div className="absolute bottom-0 right-[-20px] size-[14px] rounded-full bg-[#05c3f9]" />
          </div>

          <h1 className="font-['DIN_OT:Medium',sans-serif] text-[32px] leading-[40px] text-[#1a1a1a] text-center mb-[16px]">
            You're now on<br/>Family Plan!
          </h1>

          <p className="font-['DIN_OT:Regular',sans-serif] text-[18px] leading-[28px] text-[#606060] text-center mb-[40px]">
            Share Elevate Premium with up to 5 family members
          </p>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-[#7500d0] to-[#05c3f9] rounded-[16px] p-[24px] w-full mb-[40px]">
            <div className="grid grid-cols-2 gap-[24px]">
              <div className="text-center">
                <p className="font-['DIN_OT:Medium',sans-serif] text-[40px] leading-[48px] text-white mb-[4px]">
                  6
                </p>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">
                  Total seats
                </p>
              </div>
              <div className="text-center">
                <p className="font-['DIN_OT:Medium',sans-serif] text-[40px] leading-[48px] text-white mb-[4px]">
                  5
                </p>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">
                  Available to share
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-[12px] w-full">
            <Link
              to="/invite"
              className="w-full h-[56px] bg-gradient-to-r from-[#7500d0] to-[#05c3f9] rounded-[12px] flex items-center justify-center font-['DIN_OT:Medium',sans-serif] text-[18px] text-white"
            >
              Invite Your Family
            </Link>
            <Link
              to="/premium"
              className="w-full h-[48px] flex items-center justify-center font-['DIN_OT:Regular',sans-serif] text-[16px] text-[#606060]"
            >
              Do This Later
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
