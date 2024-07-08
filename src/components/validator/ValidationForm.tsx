import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";

// Internal Dependencies
import EnhancedButton from "../../shared/button";
import {isValidLuhn} from './utils';

// Type Definitions
type ValidationResult = {
  isValid?: boolean; 
  msg?: string;
  error?: string;
};


// Local Variables
const FormWrapper = styled(Box)({
  display: "flex",
  height: '90%',
  width: '100%',
  '.input': {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
  }
});

// this is needed to hide the control buttons of the mui number textfield.
const StyledTextField = styled(TextField)({
  width: 200,
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
	WebkitAppearance: "none",
	margin: 0,
  },
  "& input[type=number]": {
	MozAppearance: "textfield",
  },
});

const ValidationForm: React.FC = () => {
  const [creditCardNumber, setCreditCardNumber] = useState<string>("");
  const [validationResult, setValidationResult] = useState<ValidationResult>({
	msg: "",
	error: "",
  });
  const theme = useTheme();

	const handleValidation = () => {
		  const isValid = isValidLuhn(creditCardNumber);
	  if (!isValid) {
		setValidationResult({
		  isValid: false,
		  error: 'Not a valid Credit Card Number',
		});
	  } else {
		setValidationResult({
		  isValid: true,
		  messag: 'Success, That’s a valid number!',
		});
	  }
	};
  return (
	<FormWrapper component="form">
	  <Typography variant="h3">BRADO VALIDATOR</Typography>
	  <div className="input">
		<StyledTextField
		  type="number"
		  placeholder="Enter Credit Card Number"
		  value={creditCardNumber}
		  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
			setCreditCardNumber(e.target.value)
		  }
		/>
		<EnhancedButton title="Validate" />
		<Typography color={validationResult.error ? "error" : theme.palette.success.main}>
		  {validationResult.msg || validationResult.error}
		</Typography>
	  </div>
	</FormWrapper>
  );
};

export default ValidationForm;