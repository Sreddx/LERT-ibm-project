import axios from "axios";

export const postNewHour = async (record) => {
    console.log("Record in extraHours.js");
    await axios
        .post("http://localhost:3000/newPostHour", {
            name: record.type,
            country: record.country,
            band: record.band,
            rate: record.rate,
            date_to_start: record.dateStart,
            date_to_finish: record.dateFinish,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const deleteHour = async (id) => {
    await axios
        .delete(`http://localhost:3000/deleteHours/${id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};

export const updateHour = async (id, editRecord) => {
    await axios
        .put(`http://localhost:3000/updateHours/${id}`, {
            name: editRecord.type,
            country: editRecord.country,
            band: editRecord.band,
            rate: editRecord.rate,
            date_to_start: editRecord.dateStart,
            date_to_finish: editRecord.dateFinish,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
};
