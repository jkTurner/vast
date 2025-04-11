
import ChatButton from "@/app/components/ui/buttons/ChatButton";
import ContactForm from "@/app/components/ui/form/contact-form/ContactForm";
import { FaqIcon } from "@/assets/Icons";
import { ContactData, FaqData } from "@/data/mockup/MockupData";

const ContactPage = () => {
    return (
        <div className="flex flex-col w-full max-w-[var(--desktop)] px-sm flex-1">

            {/* Intro */}
            <div className="my-md">
                <h1 className="headerM">Contact Our Team</h1>
            </div>
            
            {/* Form and Info */}
            <div className="flex lg:flex-row flex-col gap-md">

                {/* Form */}
                <div className="lg:w-[60%] w-full flex flex-col">
                    <ContactForm />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col gap-sm">

                    <div className="flex max-ss:flex-col lg:flex-col gap-xs">
                        <div className="flex flex-col gap-sm">
                            <h4 className="headerM">Chat With Us</h4>
                            <p>{ContactData.helpMessage}</p>
                        </div>
                        <div className="flex flex-col gap-xs min-w-[250px] justify-end">
                            <ChatButton />
                            <ChatButton isLine={false} />
                        </div>
                    </div>

                    <div className="flex flex-col flex-1 gap-sm border-[var(--textKill)] border-t-1 pt-sm mt-xs">
                        <div>
                            <h4 className="headerS">Visit Us</h4>
                            <span>{ContactData.address}</span>
                        </div>
                        <div>
                            <h4 className="headerS">Email</h4>
                            <span>{ContactData.email}</span>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="flex flex-col gap-sm mt-xl border-t-1 border-[var(--textKill)] pt-xl">
                <h2 className="text-md text-[var(--primary)]">
                    Frequently Asked Questions
                </h2>
                {FaqData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-xs p-sm bg-[var(--secondary)]">
                        <h3 className="text-[var(--textLight)]">{item.q}</h3>
                        <div className="flex gap-xs md:items-center">
                            <FaqIcon size={32} color="var(--textLight)" />
                            <p className="flex-1">{item.a}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className="h-[300px]" /> */}
        </div>
    )
}

export default ContactPage;