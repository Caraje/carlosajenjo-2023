import Icons from 'components/icons/icons'
import React from 'react'
import { socialNetworks } from 'utils/networks'

const SocialNetworks = ({ color }) => {
  console.log({ color })
  return socialNetworks.map((soc) => (
    <a key={soc.name} href={soc.url}>
      {<Icons icon={soc.icon} color={color} />}
    </a>
  ))
}

export default SocialNetworks
