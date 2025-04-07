import { AddressText, SupportEmail } from "@/data/mockup/MockupData";
import VastLogoFull from "../ui/buttons/VastLogoFull";
import { FacebookIcon, LineIcon, TwitterIcon, WhatsappIcon } from "@/assets/Icons";
import MainButton from "../ui/buttons/MainButton";
import Navbar from "../header/Navbar";
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className="mt-2xl w-full bg-primary vastPatternPrimary">

            {/* Top Section */}
            <div className={styles.topSection}>
                
                <div className="flex flex-col md:flex-row md:gap-sm w-full">

                    {/* Top-Left Section */}
                    <div className={styles.topLeftSection}>
                        <VastLogoFull />
                        <div>
                            <p className="text-textKill">{AddressText}</p>
                            <p className="text-textKill">{SupportEmail}</p>
                        </div>
                        <div className="flex gap-sm">
                            <FacebookIcon color="var(--secondary)" />
                            <LineIcon color="var(--secondary)" />
                            <TwitterIcon color="var(--secondary)" />
                        </div>
                    </div>

                    {/* Top-Right Section */}
                    <div className={styles.topRightSection}>
                    
                        {/* Hotline Bing Section */}
                        <div className={styles.hotline}>
                            {/* Text */}
                            <div className="flex flex-col">
                                <h4 className="text-secondary font-bold">We&apos;re Here for You</h4>
                                <p className="text-textKill">Chat through Line & Whatsapp</p>
                            </div>

                            {/* Icons */}
                            <div className="flex gap-xs">
                                <LineIcon size={40} color="var(--accent)" />
                                <WhatsappIcon size={40} color="var(--accent)" />
                            </div>
                        </div>
                        
                        <div className="h-[1px] w-full bg-textLight my-sm" />

                        {/* Subscribe Section */}
                        <div className={styles.subscribe}>
                            <h4 className="text-secondary font-bold">Exclusive Offers & Insider-Only Privileges</h4>
                            
                            {/* Input Box */}
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-sm py-[8px] text-primary placeholder:text-textKill bg-secondary outline-none"
                            />

                            <div className="self-end">
                                <MainButton name="Subscribe" background="bg-accent" weight="font-light" />
                            </div>
                        </div>

                    
                    </div>
                </div>

                <div className="h-[1px] w-full bg-textLight mt-md md:mt-xl" />
            </div>

            {/* Bottom Section */}
            <div className={styles.bottomSection}>
                <div className="md:w-[50%]">
                    <Navbar color="textKill" showHome={true} />
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-textKill font-extralight text-sm">©Vast Original Inc. All rights reserved</p>
                    <p className="text-textKill font-extralight text-sm">By JK Turner Fullstack</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;