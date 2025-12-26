'use client';

import { useState } from 'react';
import { Button, Input, Typography } from 'antd';
import {
    primaryColor,
    secondaryColor,
    accentColor,
    whiteColor,
} from '../Utils/Colors';

const { Title, Paragraph } = Typography;

export default function HeroWithAbstractShapes() {
    const [email, setEmail] = useState('');
    const headline = 'We craft SMART, SCALABLE, and IMPACTFUL solutions.';

    const renderColoredText = (text) => {
        const rules = [
            { word: 'SMART,', color: primaryColor },
            { word: 'SCALABLE,', color: secondaryColor },
            { word: 'IMPACTFUL', color: accentColor },
        ];

        const out = [];
        let i = 0;

        while (i < text.length) {
            let matched = false;
            for (const r of rules) {
                if (text.slice(i, i + r.word.length) === r.word) {
                    out.push(
                        <span key={i} style={{ color: r.color, fontWeight: 700 }}>
                            {r.word}
                        </span>
                    );
                    i += r.word.length;
                    matched = true;
                    break;
                }
            }
            if (!matched) {
                out.push(<span key={i}>{text[i]}</span>);
                i++;
            }
        }
        return out;
    };

    return (
        <div className="hero">
            {/* TOP LEFT */}
            <svg className="blob tl" viewBox="0 0 600 600">
                <path
                    d="M300,80 C420,120 520,240 460,360 C400,480 240,500 160,420 C80,340 120,200 200,120 Z"
                    fill={primaryColor}
                    opacity="0.06"
                />
            </svg>

            {/* TOP RIGHT */}
            <svg className="blob tr" viewBox="0 0 600 600">
                <path
                    d="M320,100 C460,160 520,300 440,400 C360,500 200,460 140,360 C80,260 180,140 320,100 Z"
                    fill={secondaryColor}
                    opacity="0.05"
                />
            </svg>

            {/* BOTTOM LEFT */}
            <svg className="blob bl" viewBox="0 0 600 600">
                <path
                    d="M300,120 C440,160 500,300 420,420 C340,540 180,480 120,360 C60,240 160,140 300,120 Z"
                    fill={accentColor}
                    opacity="0.045"
                />
            </svg>

            {/* BOTTOM RIGHT */}
            <svg className="blob br" viewBox="0 0 600 600">
                <path
                    d="M280,100 C420,140 520,260 460,380 C400,500 220,520 140,420 C60,320 140,160 280,100 Z"
                    fill={primaryColor}
                    opacity="0.04"
                />
            </svg>

            {/* CONTENT */}
            <div className="content">
                <Title level={1}>{renderColoredText(headline)}</Title>

                <Paragraph>
                    Transforming ideas into modern web, mobile, and cloud solutions.
                </Paragraph>

                <div className="cta">
                    <Input
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button>Talk to Us</Button>
                </div>
            </div>

            <style jsx>{`
                .hero {
                    position: relative;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    padding: 80px 16px;
                }

                .blob {
                    position: absolute;
                    width: 420px;
                    height: 420px;
                    z-index: 0;
                }

                .tl {
                    top: -160px;
                    left: -160px;
                }

                .tr {
                    top: -160px;
                    right: -160px;
                }

                .bl {
                    bottom: -180px;
                    left: -180px;
                }

                .br {
                    bottom: -180px;
                    right: -180px;
                }

                .content {
                    position: relative;
                    z-index: 1;
                    text-align: center;
                    max-width: 720px;
                }

                .cta {
                    margin-top: 32px;
                    display: flex;
                    justify-content: center;
                    gap: 12px;
                }

                .cta :global(input) {
                    border-radius: 32px;
                    padding: 14px 18px;
                    max-width: 300px;
                }

                .cta :global(button) {
                    border-radius: 32px;
                    background: ${primaryColor};
                    border-color: ${primaryColor};
                    color: ${whiteColor};
                    height: 48px;
                    font-weight: 600;
                }
            `}</style>
        </div>
    );
}
