import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {CustomDatePickerProps} from "@types";

const CustomDatePicker = ({ label, selectedDate, onDateChange, minDate, maxDate } : CustomDatePickerProps) => {
    return (
        <div>
            <label>{label}</label>
            <DatePicker
                selected={selectedDate}
                onChange={onDateChange}
                minDate={minDate}
                maxDate={maxDate}
            />
        </div>
    );
};

export default CustomDatePicker;
