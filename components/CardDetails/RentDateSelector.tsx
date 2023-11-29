"use client"
import React, {useEffect, useState} from 'react';
import moment from 'moment';
import CustomDatePicker from "@components/UI/CustomDatePicker";
import {CustomButton} from "@components";
import {RentDateSelectorProps} from "@types";

const RentDateSelector = ({rent, carRentPrice}:RentDateSelectorProps) => {
    const [calculatedPrice, setCalculatedPrice] = useState(0)
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(() => {
        const tomorrow = new Date();
        tomorrow.setDate(new Date().getDate() + 1);
        return tomorrow;
    });

    useEffect(() => {
        calculatePriceForRent(startDate, endDate);
    }, []);
    const handleStartDateChange = (date: Date) => {
        if (date >= new Date()) {
            setStartDate(date);
            calculatePriceForRent(date, endDate);
        }
    };

    const handleEndDateChange = (date: Date) => {
        const maxEndDate = moment(startDate).add(1, 'year').toDate();

        if (date <= maxEndDate) {
            setEndDate(date);
            calculatePriceForRent(startDate, date);
        }
    };

    const calculatePriceForRent = (startDate: Date, endDate : Date) => {
        const differenceInMilliseconds = endDate.getTime() - startDate.getTime();

        const differenceInDays = Math.round(differenceInMilliseconds / (1000 * 60 * 60 * 24));

        setCalculatedPrice(carRentPrice * differenceInDays);
    }

    return (
        <div>
            <CustomButton
                title="Rent"
                containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
                textStyles="text-white text-[14px] leading-17px font-bold"
                handleClick={()=>rent(startDate, endDate)}
            />
            <div className="flex flex-col gap-3 pt-3">
                <CustomDatePicker
                    label="Start Date:"
                    selectedDate={startDate}
                    minDate={startDate}
                    maxDate={moment(startDate).add(1, 'year').toDate()}
                    onDateChange={handleStartDateChange}
                />

                <CustomDatePicker
                    label="End Date:"
                    selectedDate={endDate}
                    onDateChange={handleEndDateChange}
                    minDate={startDate}
                    maxDate={moment(startDate).add(1, 'year').toDate()}
                />
                <div className="flex justify-between items-center">
                    <p>Price:</p>
                    <p>{calculatedPrice}$</p>
                </div>
            </div>
        </div>
    );
};

export default RentDateSelector;
