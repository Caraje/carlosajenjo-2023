import Icons from 'components/icons/Icons'
import React from 'react'
import { socialNetworks } from 'utils/networks'

const SocialNetworks = ({ color }) => {
  return socialNetworks.map((soc) => (
    <a key={soc.name} href={soc.url} target='_blank' rel='noreferrer'>
      {<Icons icon={soc.icon} color={color} />}
    </a>
  ))
}

export default SocialNetworks
