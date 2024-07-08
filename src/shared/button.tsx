// External Dependencies
import Button from '@mui/material/Button'
import React from 'react';
import {styled} from '@mui/material/styles'

// Type Definitions
interface EnhancedButtonProps {
	onClick: () => void,
	title: string,
}

// Local Variables
const StyledButton = styled(Button)(({theme})=> ({
	backgroundColor: theme.palette.secondary.light,
	color: 'black',
	width: 200,
	margin: 18,
	'&:hover':{
		backgroundColor: theme.palette.secondary.main,
	}
}));

const EnhancedButton: React.FC<EnhancedButtonProps> = ({title}) => {
	return (
		<>
		<StyledButton 
		variant='contained'
		>
			{title}
		</StyledButton>
		</>
	)
}

export default EnhancedButton;
