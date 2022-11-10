import React, { CSSProperties } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { AlertCircle } from './AlertCircle'

import { Article } from './Article'
import { Box } from './Box'
import { BriefCase } from './BriefCase'
import { BriefCaseTime } from './BriefCaseTime'
import { Calendar } from './Calendar'
import { Chart } from './Chart'
import { ChartLine } from './ChartLine'
import { Check } from './Check'
import { CheckCircle } from './CheckCircle'
import { CheckedCart } from './CheckedCart'
import { CheckMarkFilled } from './CheckMarkFilled'
import { ChevronDown } from './ChevronDown'
import { ChevronUp } from './ChevronUp'
import { Clock } from './Clock'
import { DeviceAccount } from './DeviceAccount'
import { DolarBag } from './DolarBag'
import { ExternalLink } from './ExternalLink'
import { Facebook } from './Facebook'
import { File } from './File'
import { Fingerprint } from './Fingerprint'
import { Globe } from './Globe'
import { HandBag } from './HandBag'
import { Instagram } from './Instagram'
import { Layers } from './Layers'
import { LinkedIn } from './LinkedIn'
import { Loading } from './Loading'
import { Luggage } from './Luggage'
import { Money } from './Money'
import { Pen } from './Pen'
import { PhoneCall } from './PhoneCall'
import { PowerPlug } from './PowerPlug'
import { QRCode } from './QRCode'
import { Quote } from './Quote'
import { ShopCart } from './ShopCart'
import { SmileWink } from './SmileWink'
import { SquaresFour } from './SquaresFour'
import { Store } from './Store'
import { Support } from './Support'
import { Text } from './Text'
import { Truck } from './Truck'
import { Users } from './Users'
import { Van } from './Van'
import { WarningCircle } from './WarningCircle'
import { Whatsapp } from './Whatsapp'
import { Youtube } from './Youtube'

const SVG = {
  width: 34,
  height: 34
} as CSSProperties

const iconsList = [
  {
    icon: <Money style={SVG} />,
    name: 'Money'
  },
  {
    icon: <Truck style={SVG} />,
    name: 'Truck'
  },
  {
    icon: <Fingerprint style={SVG} />,
    name: 'Fingerprint'
  },
  {
    icon: <Van style={SVG} />,
    name: 'Van'
  },
  {
    icon: <File style={SVG} />,
    name: 'File'
  },
  {
    icon: <BriefCaseTime style={SVG} />,
    name: 'BriefCaseTime'
  },
  {
    icon: <DeviceAccount style={SVG} />,
    name: 'DeviceAccount'
  },
  {
    icon: <ShopCart style={SVG} />,
    name: 'ShopCart'
  },
  {
    icon: <Text style={SVG} />,
    name: 'Text'
  },
  {
    icon: <Article style={SVG} />,
    name: 'Article'
  },
  {
    icon: <SquaresFour style={SVG} />,
    name: 'SquaresFour'
  },
  {
    icon: <Store style={SVG} />,
    name: 'Store'
  },
  {
    icon: <PhoneCall style={SVG} />,
    name: 'PhoneCall'
  },
  {
    icon: <Users style={SVG} />,
    name: 'Users'
  },
  {
    icon: <BriefCase style={SVG} />,
    name: 'BriefCase'
  },
  {
    icon: <ChevronDown style={SVG} />,
    name: 'ChevronDown'
  },
  {
    icon: <ChevronUp style={SVG} />,
    name: 'ChevronUp'
  },
  {
    icon: <Instagram style={SVG} />,
    name: 'Instagram'
  },
  {
    icon: <Facebook style={SVG} />,
    name: 'Facebook'
  },
  {
    icon: <LinkedIn style={SVG} />,
    name: 'LinkedIn'
  },
  {
    icon: <QRCode style={SVG} />,
    name: 'QRCode'
  },
  {
    icon: <SmileWink style={SVG} />,
    name: 'SmileWink'
  },
  {
    icon: <Support style={SVG} />,
    name: 'Support'
  },
  {
    icon: <Whatsapp style={SVG} />,
    name: 'Whatsapp'
  },
  {
    icon: <Youtube style={SVG} />,
    name: 'Youtube'
  },
  {
    icon: <Luggage style={SVG} />,
    name: 'Luggage'
  },
  {
    icon: <Globe style={SVG} />,
    name: 'Globe'
  },
  {
    icon: <Box style={SVG} />,
    name: 'Box'
  },
  {
    icon: <ExternalLink style={SVG} />,
    name: 'ExternalLink'
  },
  {
    icon: <CheckMarkFilled style={SVG} />,
    name: 'CheckMarkFilled'
  },
  {
    icon: <Clock style={SVG} />,
    name: 'Clock'
  },
  {
    icon: <DolarBag style={SVG} />,
    name: 'DolarBag'
  },
  {
    icon: <CheckedCart style={SVG} />,
    name: 'Check'
  },
  {
    icon: <ChartLine style={SVG} />,
    name: 'ChartLine'
  },
  {
    icon: <Calendar style={SVG} />,
    name: 'Calendar'
  },
  {
    icon: <HandBag style={SVG} />,
    name: 'HandBag'
  },
  {
    icon: <AlertCircle style={SVG} />,
    name: 'AlertCircle'
  },
  {
    icon: <Loading style={SVG} />,
    name: 'Loading'
  },
  {
    icon: <Chart style={SVG} />,
    name: 'Chart'
  },
  {
    icon: <Quote style={SVG} />,
    name: 'Quote'
  },
  {
    icon: <Pen style={SVG} />,
    name: 'Pen'
  },
  {
    icon: <PowerPlug style={SVG} />,
    name: 'PowerPlug'
  },
  {
    icon: <WarningCircle style={SVG} />,
    name: 'WarningCircle'
  },
  {
    icon: <CheckCircle style={SVG} />,
    name: 'CheckCircle'
  },
  {
    icon: <Check style={SVG} />,
    name: 'Check'
  },
  {
    icon: <Layers style={SVG} />,
    name: 'Layers'
  }
]

export const icons = iconsList.map((icon) => ({
  ...icon,
  id: uuidv4()
}))
