import { Link } from "react-router";

export function PrototypeHome() {
  return (
    <div className="bg-gradient-to-b from-[#7500d0] to-[#301f95] size-full overflow-y-auto flex items-center justify-center py-[40px]">
      <div className="max-w-[600px] px-[24px]">
        <h1 className="font-['DIN_OT:Medium',sans-serif] text-[36px] leading-[44px] text-white text-center mb-[16px]">
          Elevate Family Plan Prototypes
        </h1>
        <p className="font-['DIN_OT:Regular',sans-serif] text-[18px] leading-[26px] text-[#bbb5ff] text-center mb-[48px]">
          Select a prototype option to explore
        </p>

        <div className="grid gap-[24px]">
          {/* Option 1 */}
          <Link
            to="/option1"
            className="bg-white/10 backdrop-blur-sm rounded-[16px] p-[24px] border-2 border-white/20 hover:border-[#05c3f9] transition-all"
          >
            <div className="flex items-start gap-[16px]">
              <div className="size-[48px] rounded-full bg-[#05c3f9] flex items-center justify-center shrink-0">
                <span className="font-['DIN_OT:Medium',sans-serif] text-[24px] text-white">1</span>
              </div>
              <div className="flex-1">
                <h2 className="font-['DIN_OT:Medium',sans-serif] text-[24px] text-white mb-[8px]">
                  Full Cross-Platform Backend
                </h2>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] leading-[24px] text-[#bbb5ff] mb-[16px]">
                  We build seat management, invite flows, and recipient-side UI. Buyers can purchase on iOS or Android, recipients can redeem on any platform.
                </p>
                <div className="space-y-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#05c3f9]"/>
                    <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">Paywall with tier selector</p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#05c3f9]"/>
                    <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">Post-purchase seat sharing</p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#05c3f9]"/>
                    <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">Email invite flow</p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#05c3f9]"/>
                    <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">Full seat management</p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#05c3f9]"/>
                    <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">Recipient redemption</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Option 2 */}
          <Link
            to="/option2"
            className="bg-white/10 backdrop-blur-sm rounded-[16px] p-[24px] border-2 border-white/20 hover:border-[#05c3f9] transition-all"
          >
            <div className="flex items-start gap-[16px]">
              <div className="size-[48px] rounded-full bg-[#05c3f9] flex items-center justify-center shrink-0">
                <span className="font-['DIN_OT:Medium',sans-serif] text-[24px] text-white">2</span>
              </div>
              <div className="flex-1">
                <h2 className="font-['DIN_OT:Medium',sans-serif] text-[24px] text-white mb-[8px]">
                  iOS with Apple Family Sharing
                </h2>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] leading-[24px] text-[#bbb5ff] mb-[16px]">
                  New family-sharing-enabled SKU sold only on iOS. Apple handles entitlement distribution. Both buyers and recipients must be on iOS in the same Apple Family Group.
                </p>
                <div className="space-y-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#05c3f9]"/>
                    <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">Paywall with Apple Family Sharing notice</p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#05c3f9]"/>
                    <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">Pre-purchase eligibility checkpoint</p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#05c3f9]"/>
                    <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">Setup education walkthrough</p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#05c3f9]"/>
                    <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">Premium tab with sharing states</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Option 3 */}
          <Link
            to="/option3"
            className="bg-white/10 backdrop-blur-sm rounded-[16px] p-[24px] border-2 border-white/20 hover:border-[#05c3f9] transition-all"
          >
            <div className="flex items-start gap-[16px]">
              <div className="size-[48px] rounded-full bg-[#05c3f9] flex items-center justify-center shrink-0">
                <span className="font-['DIN_OT:Medium',sans-serif] text-[24px] text-white">3</span>
              </div>
              <div className="flex-1">
                <h2 className="font-['DIN_OT:Medium',sans-serif] text-[24px] text-white mb-[8px]">
                  Option 2 + Android Concierge
                </h2>
                <p className="font-['DIN_OT:Regular',sans-serif] text-[16px] leading-[24px] text-[#bbb5ff] mb-[16px]">
                  Same as Option 2, but adds a manual provisioning path for Android family members. iOS members use Apple Family Sharing, Android members are granted access via support request.
                </p>
                <div className="space-y-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#05c3f9]"/>
                    <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">Hybrid iOS + Android support notice</p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#05c3f9]"/>
                    <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">Setup education + support form</p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#05c3f9]"/>
                    <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">Premium tab showing both platforms</p>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="size-[4px] rounded-full bg-[#05c3f9]"/>
                    <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/80">Android email + redemption flows</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <p className="font-['DIN_OT:Regular',sans-serif] text-[14px] text-white/60 text-center mt-[32px]">
          Use the menu (top-right) to navigate between screens within each option
        </p>
      </div>
    </div>
  );
}
