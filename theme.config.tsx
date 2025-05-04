import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>WEBFISHING Modding Docs</span>,
  chat: {
    link: 'https://discord.gg/fWFswUURQX',
  },
  footer: {
    text: 'Made by IamKikin, Written in NextJS using Nextra Docs Template.',
  },
  feedback: {
		content: null
	},
  editLink: {
    component: () => null
  }  
}

export default config
