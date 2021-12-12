import CloseIcon from '@mui/icons-material/Close'
import {
  Button,
  Container,
  Dialog,
  DialogContent as MuiDialogContent,
  DialogTitle as MuiDialogTitle,
  IconButton,
  Theme
} from '@mui/material'
import { createStyles, withStyles, WithStyles } from '@mui/styles'
import * as React from 'react'
import { useState } from 'react'

const styles = (theme: Theme) =>
  createStyles({
    title: {
      textAlign: 'left'
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content'
    }
  })

export interface DialogTitleProps extends WithStyles<typeof styles> {
  children: React.ReactNode
  onClose: () => void
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props
  return (
    <MuiDialogTitle className={classes.title} {...other}>
      {children}
      <IconButton className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </MuiDialogTitle>
  )
})

export interface DialogContentProps extends WithStyles<typeof styles> {
  children: React.ReactNode
}

const DialogContent = withStyles(styles)((props: DialogContentProps) => {
  const { children, classes } = props
  return (
    <MuiDialogContent dividers>
      <form className={classes.form}>{children}</form>
    </MuiDialogContent>
  )
})

interface ClosablePanelProps {
  title: string
  icon?: React.ReactNode
  open: boolean
  children?: React.ReactNode
}

export const ClosablePanel = ({
  title,
  icon,
  open,
  children
}: ClosablePanelProps) => {
  const [toggle, setToggle] = useState(open)
  const togglePanel = () => setToggle(!toggle)

  return (
    <Container>
      <Button onClick={togglePanel}>{icon || title}</Button>
      <Dialog open={toggle} onClose={togglePanel}>
        <DialogTitle onClose={togglePanel}>{title}</DialogTitle>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </Container>
  )
}
