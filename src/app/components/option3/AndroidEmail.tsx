import { Link } from "react-router";

export function AndroidEmail() {
  return (
    <div className="bg-[#f5f5f5] overflow-clip relative size-full flex items-center justify-center py-[40px]">
      <div className="bg-white rounded-[8px] w-[600px] max-w-[90%] shadow-lg overflow-hidden">
        {/* Email Header */}
        <div className="bg-gradient-to-r from-[#7500d0] to-[#05c3f9] p-[24px]">
          <div className="flex items-center gap-[12px] mb-[16px]">
            <div className="size-[48px] rounded-full bg-white flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 0L17.5 7L25.5 8L19.75 13.5L21 21.5L14 17.5L7 21.5L8.25 13.5L2.5 8L10.5 7L14 0Z" fill="#7500d0"/>
              </svg>
            </div>
            <div>
              <p className="font-['DIN_OT:Medium',sans-serif] text-[20px] text-white">Elevate</p>
              <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">support@elevateapp.com</p>
            </div>
          </div>
        </div>

        {/* Email Body */}
        <div className="p-[32px]">
          <h1 className="font-['DIN_OT:Medium',sans-serif] text-[28px] leading-[36px] text-[#1a1a1a] mb-[16px]">
            Welcome to Elevate Premium!
          </h1>

          <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] leading-[26px] text-[#606060] mb-[24px]">
            Hi there,
          </p>

          <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] leading-[26px] text-[#606060] mb-[24px]">
            <strong className="text-[#1a1a1a]">Alex</strong> added you to their Elevate Family Plan. You now have access to Elevate Premium for the next 12 months!
          </p>

          <div className="bg-[#f2f8fa] rounded-[12px] p-[24px] mb-[24px]">
            <h3 className="font-['DIN_OT:Medium',sans-serif] text-[18px] text-[#1a1a1a] mb-[16px]">
              Here's how to get started:
            </h3>

            <div className="space-y-[16px]">
              <div className="flex gap-[16px]">
                <div className="size-[32px] rounded-full bg-[#05c3f9] flex items-center justify-center shrink-0">
                  <span className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white">1</span>
                </div>
                <div>
                  <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#1a1a1a] mb-[4px]">
                    Download Elevate
                  </p>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060] mb-[12px]">
                    Get the app from the Google Play Store
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-[8px] h-[44px] px-[20px] bg-[#1a1a1a] rounded-[4px] font-['DIN_OT:Medium',sans-serif] text-[14px] text-white"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M2 1L15 8.5L2 16V1Z" fill="white"/>
                      <path d="M15 8.5L2 16L12 11L15 8.5Z" fill="white" opacity="0.6"/>
                    </svg>
                    Get it on Google Play
                  </a>
                </div>
              </div>

              <div className="flex gap-[16px]">
                <div className="size-[32px] rounded-full bg-[#05c3f9] flex items-center justify-center shrink-0">
                  <span className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white">2</span>
                </div>
                <div>
                  <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#1a1a1a] mb-[4px]">
                    Sign in or create an account
                  </p>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                    Use this email address: <strong className="text-[#1a1a1a]">jordan.s@email.com</strong>
                  </p>
                </div>
              </div>

              <div className="flex gap-[16px]">
                <div className="size-[32px] rounded-full bg-[#05c3f9] flex items-center justify-center shrink-0">
                  <span className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-white">3</span>
                </div>
                <div>
                  <p className="font-['DIN_OT:Medium',sans-serif] text-[16px] text-[#1a1a1a] mb-[4px]">
                    Your Premium access is active!
                  </p>
                  <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-[#606060]">
                    Start using all Premium features immediately
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#fff5e6] border-l-4 border-[#ff9500] p-[16px] mb-[24px]">
            <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] leading-[22px] text-[#1a1a1a]">
              <strong>Note:</strong> Your Premium access expires on <strong>May 30, 2027</strong>. If Alex renews their Family Plan, your access will automatically continue.
            </p>
          </div>

          <Link
            to="/option3/android-redemption"
            className="inline-flex items-center justify-center h-[56px] px-[32px] bg-[#05c3f9] rounded-[4px] font-['DIN_OT:Medium',sans-serif] text-[18px] text-white"
          >
            Open Elevate App →
          </Link>

          <div className="mt-[32px] pt-[24px] border-t border-[#e0e0e0]">
            <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] leading-[22px] text-[#999]">
              Questions? Contact us at support@elevateapp.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
