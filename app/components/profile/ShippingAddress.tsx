'use client'

import { useEffect, useState } from "react";
import InputField from "../ui/form/InputField";
import MainButton from "../ui/buttons/MainButton";
import { supabaseClientBrowser } from "@/utils/supabase/client";

interface ShippingAddress {
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    zipcode: string;
    country: string;
}

const ShippingAddress = () => {

    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [country, setCountry] = useState("");

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAddress = async () => {
            setLoading(true);

            const { data: userData, error: userError } = await supabaseClientBrowser().auth.getUser();
            if (userError || !userData.user) {
                console.error("Failed to get user: ", userError);
                return setLoading(false);
            }

            const { data, error } = await supabaseClientBrowser()
                .from("shipping_address")
                .select("address_line_1, address_line_2, city, state, zipcode, country")
                .eq("user_id", userData.user.id)
                .single();

            if (error) {
                console.warn("No existing shipping address or failed to fetch: ", error.message);
            }

            if (data) {
                setAddress1(data.address_line_1 || "");
                setAddress2(data.address_line_2 || "");
                setCity(data.city || "");
                setState(data.state || "");
                setZipcode(data.zipcode || "");
                setCountry(data.country || "");
            }

            setLoading(false);
        };
        fetchAddress();
    }, []);

    const handleSave = async () => {
        
        setStatus("Updating shipping address...")

        try {
            const res = await fetch("/api/profile/update-address", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    address_line_1: address1,
                    address_line_2: address2,
                    city,
                    state,
                    zipcode,
                    country,
                }),
            });
            const result = await res.json();
            if (!res.ok) throw new Error(result.error || "Unknown error");
            setStatus("Address updated successfully");
        } catch (error) {
            console.error("Failed to update shipping address: ", error);
            setStatus("Failed to update address");
        }
    }

    return (
        <div className="flex flex-col gap-sm flex-1 w-full">
            { loading ? (<p className="px-sm">Loading...</p>) : 
                (<h2 className="text-sm text-[var(--primary)] px-sm">Shipping Address</h2>)
            }
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSave();
                }}
                className="frame flex flex-col gap-sm"
            >
                <InputField 
                    label="Andress Line 1 (Street name, house number, building, etc.)" 
                    id="address1"
                    inputValue={address1} 
                    onChange={(e) => setAddress1(e.target.value)}
                />
                <InputField
                    label="Address Line 2 (Apartment, suite, floor, etc.) (Optional)"
                    id="address2"
                    inputValue={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                />

                <div className="flex sm:flex-row flex-col w-full gap-sm items-center">
                    <div className="w-full sm:max-w-[50%]">
                        <InputField
                            label="City / District"
                            id="city"
                            inputValue={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="w-full sm:max-w-[50%]">
                        <InputField
                            label="State / Province"
                            id="state"
                            inputValue={state}
                            onChange={(e) => setState(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex sm:flex-row flex-col w-full gap-sm items-center">
                    <div className="w-full sm:max-w-[50%]">
                        <InputField
                            label="Zip / Postal Code"
                            id="zip-code"
                            inputValue={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                        />
                    </div>
                    <div className="w-full sm:max-w-[50%]">
                        <InputField
                            label="Country"
                            id="country"
                            inputValue={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                </div>

                <div className="self-end flex gap-sm items-center">
                    { status && (
                        <p>{status}</p>
                    )}
                    <div>
                        <MainButton name="Save" type="submit" />
                    </div>
                </div>
                
            </form>
        </div>
    )
}

export default ShippingAddress;