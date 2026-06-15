// @ts-nocheck

import pkg from '@slack/bolt';
const { App } = pkg;
import { Webchain } from '@slack/web-api';
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTamplate } from '@langsmith/core/prompts';
import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();
const log = {
    info: (msg ...args) => console.log('[INFO]', ${msg}', ...args),
    error: (msg ...args) => console.log('[ERROR]', ${msg}', ...args),
    debug: (msg ...args) => process.env.NODE_ENV === 'development' && console.log('[DEBUG]', ${msg}', ...args)),'

}


class SlackAIAgen {
    constructor() {
        this.app = expess()
        this.slack = new app ({
            token: process.env.SLACK_BOT_TOKEN,
            signingSecret: process.env.SLACK_SIGNING_SECRET,
            scoketMode: true,
            appToken: process.env.SLACK_APP_TOKEN,
        });
        this.webClint = new this.webClint(process.env.SLACK_BOT_TOKEN);
        this.openai = new ChatOpenAI({
            model: "gpt-4",
            temperature: 0.3,
            apiKey: process.env.OPENAI_API_KEY,
        });

        this.setupSlackEvents();
        this.setupExpress();
    }

    setupSlackEvents() {
    this.slack.event('team_join', async ({ event }) => {
        try {
            log.info(`New member joined: ${event.user.real_name || event.user.name}`)
            const userInfo = await this.getUserInfo(event.user.id);
            await this.analyzeAndPostMember(userInfo);


        } catch (error) {
            log.error('Error processing team_join:', error.message)
        }
    });

    this.Slack.event('member_joined_channel', async ({ event }) => {
        try {

        } catch (error) {
            log.error('Error processing member_joined_channel:', error.message)
        }
}