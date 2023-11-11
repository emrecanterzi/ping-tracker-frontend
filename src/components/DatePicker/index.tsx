import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import useModal from "../../Hooks/useModal";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { setDateFilters } from "../../features/response/responseSlice";

const DatePicker = () => {
  const [dates, setDates] = useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
  }>({
    startDate: new Date("2023-11-5"),
    endDate: new Date("2023-11-11"),
  });
  const dispatch = useDispatch<AppDispatch>();

  const onChange = (dates: RangeKeyDict) => {
    if (dates.selection.startDate && dates.selection.endDate) {
      setDates({
        startDate: dates.selection.startDate,
        endDate: new Date(dates.selection.endDate.setHours(23, 59, 59)),
      });
    }
  };

  useEffect(() => {
    if (dates.endDate && dates.startDate) {
      dispatch(
        setDateFilters({
          startDate: dates.startDate.getTime(),
          endDate: dates.endDate.getTime(),
        })
      );
    }
    return () => {};
  }, [dates, dispatch]);

  const [_, toggleModal, content] = useModal(
    <DateRangePicker
      ranges={[
        {
          startDate: dates.startDate,
          endDate: dates.endDate,
          key: "selection",
        },
      ]}
      maxDate={new Date()}
      onChange={onChange}
    />
  );

  return (
    <div className={styles.container}>
      {content}
      <button
        onClick={() => {
          toggleModal();
        }}
      >
        open
      </button>
    </div>
  );
};

export default DatePicker;
