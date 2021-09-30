import React from 'react';
import { Button } from '@material-ui/core';

import { useButtonStyles } from './StyledButton.styles';

interface StyledButtonProps {
  onClick: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ onClick, children }) => {
  const { root } = useButtonStyles();

  return <Button classes={{ root }} onClick={onClick}>{children}</Button>;
}

export default StyledButton;
