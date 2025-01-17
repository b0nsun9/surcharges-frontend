import { useState } from "react"
import { useMediaQuery } from "@mui/material"
import { Tooltip } from "@mui/material"
import { Confirmed } from "../Confirmed"
import { Reported } from "../Reported"
import { Unknown } from "../Unknown"
import HelpIcon from '@mui/icons-material/Help'

interface StatusHelpProps {
  includingUnknown: boolean
}

export function StatusHelp(props: StatusHelpProps) {

  const isMobile = useMediaQuery('(max-width: 600px)')

  const [openTooltip, setOpenTooltip] = useState(false)

  const handleClick = () => {
    if (isMobile) {
      setOpenTooltip((prev) => !prev)
    }
  }

  const handleClose = () => {
    if (isMobile) {
      setOpenTooltip(false)
    }
  }

  return (
    <Tooltip
      title={
        <div className='mt-2 mb-2'>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2'>
              <Confirmed />
              <p>The surcharge rate is confirmed by administrator.</p>
            </div>
            <div className='flex items-center gap-2'>
              <Reported />
              <p>The surcharge rate is reported by someone but not confirmed, It may not be accurate.</p>
            </div>
            {
              props.includingUnknown && (
                <div className='flex items-center gap-2'>
                  <Unknown />
                  <p>The surcharge rate is unknown.</p>
                </div>
              )
            }
          </div>
        </div>
      }
      open={isMobile ? openTooltip : undefined}
      onClose={handleClose}
      arrow
      disableInteractive
      disableFocusListener={isMobile}
      disableHoverListener={isMobile}
      disableTouchListener//={!isMobile}
    >
      <div
        className='cursor-pointer'
        onClick={handleClick}
      >
        <HelpIcon fontSize='small' />
      </div>
    </Tooltip>
  )
}

