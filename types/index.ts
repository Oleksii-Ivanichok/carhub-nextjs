import {MouseEventHandler} from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}

export interface CarProps {
    car_rent_in_$: number;
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface CustomFilterProps{
    title: string;
    options: OptionProps[];
}

export interface OptionProps{
    title: string;
    value: string;
}

export interface ShowMoreProps{
    pageNumber: number;
    isNext: boolean;
}
export interface CarDetailsProps {
    isOpen:boolean;
    closeModal: () => void;
    car: CarProps;
}

export interface CustomDatePickerProps {
    label: string;
    selectedDate: Date | null;
    onDateChange: (date: Date) => void;
    minDate?: Date | null;
    maxDate?: Date | null;
}

export interface RentDateSelectorProps {
    rent: (startDate: Date, endDate: Date | null, calculatedPrice: number) => void;
    carRentPrice: number;
}

export interface CartProps {
    isOpen: boolean;
    closeModal: () => void;
    rentedCars: any;
}