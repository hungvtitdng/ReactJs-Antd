import React from 'react'
import MdiIcon from '@mdi/react'
import * as MdiJs from '@mdi/js'

const Icon = ({ name, ...props }) => <MdiIcon path={MdiJs[name]} size={0.8} {...props} />

export default Icon
