'use client'

import { CalendarIcon } from "@/assets/Icons";
import { useRef } from "react";
import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";

interface BirthDateProps {
  dob: Date | null;
  setDob: (date: Date | null) => void;
}

const BirthDate = ({ dob, setDob }: BirthDateProps) => {
  const datepickerRef = useRef<ReactDatePicker>(null);

  const openDatepicker = () => {
    datepickerRef.current?.setFocus();
  };

  return (
    <div className="flex flex-col gap-sm w-full max-w-[var(--desktop)]">
      <div className="flex flex-col gap-xxs">
        <h4 className="text-[var(--textLight)] font-semibold text-sm">Birth Date</h4>
        <div className="grid grid-cols-[200px_auto] items-center gap-xs">
          <div className="overflow-hidden">
            <DatePicker
              ref={datepickerRef}
              selected={dob}
              onChange={setDob}
              placeholderText="Select Birth Date"
              maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 13))}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              dateFormat="dd MMM yyyy"
              className="input-block w-auto cursor-pointer"
              popperClassName="custom-datepicker"
            />
          </div>
          <div>
            <button type="button" onClick={openDatepicker} className="cursor-pointer">
              <CalendarIcon size={40} color="var(--bgMain)" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthDate;



// 'use client'

// import { CalendarIcon } from "@/assets/Icons";
// import { useState, useRef } from "react";
// import ReactDatePicker from "react-datepicker";
// import DatePicker from "react-datepicker";
// import styles from "./profile.module.css"

// const BirthDate = () => {
// 	const [dob, setDob] = useState<Date | null>(null);
// 	const datepickerRef = useRef<ReactDatePicker>(null);

// 	const openDatepicker = () => {
// 		if (datepickerRef.current) {
// 			datepickerRef.current.setFocus(); // programmatically focus the input
// 		}
// 	};

// 	return (
// 		<div className="flex flex-col gap-sm w-full max-w-[var(--desktop)]">

// 			<div className="flex flex-col gap-xxs">
// 				<h4 className="text-[var(--textLight)] font-semibold text-sm">Birth Date</h4>
// 				<div className="grid grid-cols-[200px_auto] items-center gap-xs">
// 					<div className="overflow-hidden">
// 					<DatePicker
// 						ref={datepickerRef}
// 						selected={dob}
// 						onChange={(date) => setDob(date)}
// 						placeholderText="Select Brith Date"
// 						maxDate={new Date(new Date().setFullYear(new Date().getFullYear() - 13))}
// 						showMonthDropdown
// 						showYearDropdown
// 						dropdownMode="select"
// 						dateFormat="dd MMM yyyy"
// 						className={`${styles.dobMenu} w-auto`}
// 						popperClassName="custom-datepicker"
// 					/>
// 					</div>
// 					<div>
// 						<button type="button" onClick={openDatepicker} className="cursor-pointer">
// 							<CalendarIcon size={40} color="var(--bgMain)" />
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default BirthDate;


