import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Link } from "react-router-dom";
import { useTimeContext } from "../contexts/TimerContext";

export default function QuizDailogBox({
  openBox,
  moduleName,
  setDialogBoxOpen,
}) {
  const { setTimerOn } = useTimeContext();

  const handleClose = () => {
    setDialogBoxOpen(false);
  };

  const startQuiz = () => {
    setTimerOn(true);
    setDialogBoxOpen(false);
  };

  return (
    <div>
      <Dialog
        open={openBox || open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">Start Quiz?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="text-center">
              <p className="text-lg">
                Only <span className="font-bold">First attempt</span> will be
                considered valid! Although, you can attempt quiz multiple times.
              </p>
              <p className="text-red-500 m-5">
                Please <span className="font-bold">do not refresh</span> the
                page once you start the quiz
              </p>
              <p>
                Once you answer any question, please click on verify to validate
                your answer, otherwise score will not be calculated
              </p>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error" variant="outlined">
            Will try again later
          </Button>
          <Button onClick={startQuiz} color="success" variant="outlined">
            <Link autoFocus to={`/dashboard/quiz/${moduleName}`}>
              Proceed
            </Link>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
