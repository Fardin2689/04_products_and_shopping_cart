import React, { useCallback, useState } from 'react';
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import ErrorIcon from '@material-ui/icons/Error';

export default function CartListItem({ data, divider, handleDelItem }) {
  const [hasErrorOccurred, setHasErrorOccurred] = useState(false);

  const handleError = useCallback(() => {
    setHasErrorOccurred(true);
  }, [setHasErrorOccurred]);

  return (
    <ListItem divider={divider}>
      <ListItemAvatar>
        {hasErrorOccurred ? (
          <ErrorIcon color="secondary" />
        ) : (
          <Avatar
            style={{ borderRadius: 4 }}
            src={hasErrorOccurred ? null : data.mainThumb}
            onError={handleError}
          />
        )}
      </ListItemAvatar>
      <ListItemText primary={data.title} secondary={`Number: ${data.qty}`} />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={() => handleDelItem(data.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
