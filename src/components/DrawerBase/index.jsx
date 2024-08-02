import PropTypes from 'prop-types'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import clsx from 'clsx'

function DrawerBase({ children, paperClassName, anchor = 'left', variant, open = false, onOpen, onClose }) {
  return (
    <SwipeableDrawer
      anchor={anchor}
      open={open}
      onOpen={onOpen}
      onClose={onClose}
      variant={variant}
      sx={{
        '& .MuiDrawer-paper': {
          boxShadow: 'var(--shadow)',
          background: 'var(--widget)',
          color: 'var(--text)',
          height: 'var(--app-height)',
          minHeight: '-webkit-fill-available'
        }
      }}
      classes={{
        paper: clsx('!w-full xs:!w-[374px] flex flex-col', paperClassName)
      }}
    >
      {children}
    </SwipeableDrawer>
  )
}

DrawerBase.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  anchor: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
  paperClassName: PropTypes.string
}

export default DrawerBase
