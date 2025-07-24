"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import "./registration.css";


const industriesList = [
    "Industries-1",
    "Industries-2",
    "Industries-3",
    "Industries-4",
];
const PartnerRegistration = () => {

    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        if (selectAll) {
            setSelectedIndustries([...industriesList]);
        } else {
            setSelectedIndustries([]);
        }
    }, [selectAll]);

    const handleIndividualChange = (industry) => {
        if (selectedIndustries.includes(industry)) {
            const updated = selectedIndustries.filter((i) => i !== industry);
            setSelectedIndustries(updated);
            setSelectAll(false);
        } else {
            const updated = [...selectedIndustries, industry];
            setSelectedIndustries(updated);
            if (updated.length === industriesList.length) {
                setSelectAll(true);
            }
        }
    };

    return (
        <main className="partner-form">
            <header className="form-header">
                <h1>Partner Registration</h1>
                <p>The information you provide below must be that of an authorized signer at your company.</p>
            </header>

            <div className="form-wrapper">
                <Image
                    src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1752929352/Ellipse_11_ruliqi.png"
                    alt="decor"
                    width={500}
                    height={500}
                    priority
                    className="decor-image contact-right"
                />
                <Image
                    src="https://res.cloudinary.com/dqjbzgksw/image/upload/v1752929352/Ellipse_12_cwts5e.png"
                    alt="decor"
                    width={500}
                    height={500}
                    priority
                    className="decor-image additional-left"
                />

                <form className="form-sections">
                    <fieldset className="form-box">
                        <h2 className="form-heading">Contact Information</h2>
                        <div className="form-grid">
                            <input type="text" placeholder="First name*" required />
                            <input type="text" placeholder="Last name*" required />
                            <input type="email" placeholder="Email*" required />
                            <input type="text" placeholder="Title*" required />
                            <input type="tel" placeholder="Phone*" required />
                            <input type="tel" placeholder="Mobile Phone*" required />
                        </div>
                    </fieldset>

                    <fieldset className="form-box">
                        <h2 className="form-heading">Company Information</h2>
                        <div className="form-grid form-grid-single">
                            <input type="text" placeholder="Name of Company*" required />
                        </div>
                        <div className="form-grid form-grid-single">
                            <input type="text" placeholder="Address*" required />
                        </div>
                        <div className="form-grid">
                            <input type="text" placeholder="City*" required />
                            <input type="text" placeholder="State*" required />
                            <input type="text" placeholder="Zip code*" required />
                            <input type="text" placeholder="Country*" required />
                            <input type="url" placeholder="Website*" required />
                            <input type="text" placeholder="Type of organization*" required />
                        </div>

                        <label className="checkbox">
                            <input type="checkbox" /> Enter different shipping address.
                        </label>
                    </fieldset>

                    <fieldset className="form-box">
                        <h2 className="form-heading">Additional Information</h2>
                        <div className="custom-select">
                            <select required>
                                <option value="">
                                    How many customers do you anticipate referring to Customizer within the next 12 months?*
                                </option>
                                <option>1-5</option>
                                <option>6-10</option>
                                <option>10+</option>
                            </select>
                            <span className="custom-select-icon">
                                <IoMdArrowDropdown />
                            </span>
                        </div>

                        <div className="checkbox-group">
                            <p>Which industries do you work with primarily?*</p>

                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectAll}
                                    onChange={() => setSelectAll(!selectAll)}
                                />{" "}
                                All Industries
                            </label>

                            {industriesList.map((industry) => (
                                <label key={industry}>
                                    <input
                                        type="checkbox"
                                        checked={selectedIndustries.includes(industry)}
                                        onChange={() => handleIndividualChange(industry)}
                                    />{" "}
                                    {industry}
                                </label>
                            ))}
                        </div>

                        <div className="custom-select">
                            <select required>
                                <option value="">
                                    Is anyone at your company a relative, friend, or otherwise connected to any Customizer employees?*
                                </option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            <span className="custom-select-icon">
                                <IoMdArrowDropdown />
                            </span>
                        </div>


                        <input type="text" placeholder="Where are your clients based?*" required className="text-input" />
                        <input type="text" placeholder="Where are your clients based?*" required className="text-input" />

                        <textarea placeholder="Tell us a bit more about what you're looking for from a partnership with Customizer" className="text-input"></textarea>
                    </fieldset>

                    <button type="submit" className="submit-btn">Apply</button>
                    <p className="disclaimer-text">
                        By requesting a demo you agree to Customizer’s <Link href={"/privacy-policy"} >Privacy Policy</Link>, and you consent to receive communications.
                    </p>
                </form>
            </div>
        </main>
    );
};

export default PartnerRegistration;
