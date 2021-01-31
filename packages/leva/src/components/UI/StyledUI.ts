import { styled } from '../../styles'
import { StyledContent } from '../Folder/StyledFolder'

export const Row = styled('div', {
  position: 'relative',
  display: 'grid',
  gridRowGap: '$rowV',
  gridTemplateRows: 'minmax(var(--sizes-rowHeight), max-content)',
  alignItems: 'center',
  color: '$text',

  [`${StyledContent} > &`]: {
    padding: '0 $rowH',
    ':first-of-type': { marginTop: '$rowV' },
    ':last-of-type': { marginBottom: '$rowV' },
  },

  variants: {
    input: {
      true: {
        gridTemplateColumns: 'auto var(--sizes-controlWidth)',
        gridColumnGap: '$colGap',
      },
    },
  },
})

export const CopyLabelContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  cursor: 'pointer',
  overflow: 'hidden',

  '> label': {
    cursor: 'pointer',
  },

  '> svg': {
    opacity: 0,
    marginLeft: '$colGap',
    width: 15,
    minWidth: 15,
    height: 15,
  },
  '&:hover > svg': {
    opacity: 1,
  },
})

export const StyledLabel = styled('label', {
  paddingLeft: '$rowH',
  color: '$text',
  fontWeight: '$label',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
})
