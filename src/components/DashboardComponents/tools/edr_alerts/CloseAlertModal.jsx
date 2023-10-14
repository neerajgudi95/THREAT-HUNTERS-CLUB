import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

export const ModalComponent = ({ open, onClose, onSubmit, alertId }) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({
    classification: "",
    comments: "",
  });

  const validateForm = () => {
    const errors = {};

    if (!formData.classification) {
      errors.classification =
        "Please select one of the classifications for the alert";
    }

    if (!formData.comments) {
      errors.comments = "Comments are required";
    }

    return errors;
  };

  const resetForm = () => {
    setFormData({
      classification: "",
      comments: "",
    });

    // Clear form errors
    setFormErrors({
      classification: "",
      comments: "",
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    // Make API call here using formData
    if (Object.keys(errors).length === 0) {
      await onSubmit(formData);
      // Close the modal and notify the parent component
      resetForm();
      onClose();
    } else setFormErrors(errors);
    // try {
    //   // Perform API call using formData
    // } catch (error) {
    //   // Handle API error
    // }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleRadioChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  return (
    <Dialog open={open} onClose={onClose}>
      <div className="w-96 p-4 bg-white modal-content">
        <DialogTitle>
          <Typography variant="h6">Close Alert</Typography>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="alertId">
                Alert ID:
              </label>
              <input
                type="text"
                id="alertId"
                name="alertId"
                value={alertId}
                disabled
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <div className="flex">
                <label className="flex items-center mr-4">
                  <input
                    type="radio"
                    name="classification"
                    value="True positive"
                    checked={formData.classification === "True positive"}
                    onChange={handleInputChange}
                  />
                  <span className="ml-2">True Positive</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="classification"
                    value="False positve"
                    checked={formData.classification === "False positve"}
                    onChange={handleInputChange}
                  />
                  <span className="ml-2">False Positive</span>
                </label>
              </div>
              {formErrors.classification && (
                <div className="text-red-500">{formErrors.classification}</div>
              )}
            </div>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="comments">
                Comments:
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                rows="4"
              ></textarea>
              {formErrors.comments && (
                <div className="text-red-500">{formErrors.comments}</div>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </DialogContent>
      </div>
    </Dialog>
  );
};
