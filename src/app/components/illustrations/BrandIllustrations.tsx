import type { CSSProperties } from 'react';
import { COLORS } from '../primitives';

type IllustrationProps = {
  className?: string;
  style?: CSSProperties;
};

function sharedSvgProps(className?: string, style?: CSSProperties) {
  return {
    className,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block',
      ...style,
    },
    viewBox: '0 0 360 280',
    role: 'img',
    'aria-hidden': true,
  };
}

export function EvidenceIllustration({ className, style }: IllustrationProps) {
  return (
    <svg {...sharedSvgProps(className, style)}>
      {/* Magnifying glass circle */}
      <circle cx="120" cy="140" r="75" fill="none" stroke={COLORS.structure} strokeWidth="2.4" />
      
      {/* Magnifying glass handle */}
      <path d="M 180 200 L 240 260" stroke={COLORS.structure} strokeWidth="2.4" strokeLinecap="round" />
      
      {/* Pie chart visible through magnifying glass */}
      <g opacity="0.85">
        <circle cx="120" cy="140" r="40" fill="none" stroke={COLORS.line} strokeWidth="1" />
        <path d="M 120 100 A 40 40 0 0 1 160 157" fill={COLORS.signal} opacity="0.2" />
        <path d="M 160 157 A 40 40 0 0 1 95 170" fill={COLORS.structure} opacity="0.12" />
        <path d="M 95 170 A 40 40 0 0 1 120 100" fill={COLORS.signal} opacity="0.15" />
      </g>
      
      {/* Connection lines and validation points */}
      <path d="M 220 80 L 260 60" stroke={COLORS.structure} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 230 160 L 280 150" stroke={COLORS.structure} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M 210 220 L 260 240" stroke={COLORS.structure} strokeWidth="1.2" strokeLinecap="round" />
      
      {/* Checkmarks (validation) */}
      <g>
        <rect x="260" y="45" width="45" height="45" rx="6" fill="none" stroke={COLORS.structure} strokeWidth="1.2" />
        <path d="M 270 65 L 275 72 L 295 55" stroke={COLORS.signal} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 270 80 L 275 87 L 295 70" stroke={COLORS.signal} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      
      {/* Bar chart on right */}
      <g>
        <rect x="280" y="155" width="60" height="80" rx="4" fill="none" stroke={COLORS.structure} strokeWidth="1.2" />
        <rect x="290" y="205" width="8" height="30" fill={COLORS.structure} opacity="0.3" />
        <rect x="303" y="190" width="8" height="45" fill={COLORS.signal} opacity="0.25" />
        <rect x="316" y="175" width="8" height="60" fill={COLORS.structure} opacity="0.2" />
        <rect x="329" y="185" width="8" height="50" fill={COLORS.signal} opacity="0.2" />
      </g>
      
      {/* Connection nodes */}
      <circle cx="260" cy="70" r="4" fill={COLORS.signal} />
      <circle cx="280" cy="150" r="4" fill={COLORS.structure} />
      <circle cx="260" cy="245" r="4" fill={COLORS.signal} />
      <circle cx="140" cy="230" r="3.5" fill={COLORS.structure} opacity="0.5" />
    </svg>
  );
}

export function CapabilityIllustration({ className, style }: IllustrationProps) {
  return (
    <svg {...sharedSvgProps(className, style)}>
      {/* Outer orbital circle */}
      <circle cx="180" cy="140" r="110" fill="none" stroke={COLORS.line} strokeWidth="1.2" strokeDasharray="4,3" />
      
      {/* Middle orbital circle */}
      <circle cx="180" cy="140" r="65" fill="none" stroke={COLORS.line} strokeWidth="1" />
      
      {/* Central 3D asterisk/star shape in neon green */}
      <g transform="translate(180, 140)">
        {/* Main star points */}
        <path d="M 0 -50 L 0 50 M -43 -25 L 43 25 M 43 -25 L -43 25" stroke={COLORS.signal} strokeWidth="18" strokeLinecap="round" />
        
        {/* Darker navy overlay for 3D effect */}
        <path d="M 0 -48 L 0 48 M -41 -23 L 41 23 M 41 -23 L -41 23" stroke={COLORS.structure} strokeWidth="8" strokeLinecap="round" opacity="0.4" />
      </g>
      
      {/* Top orbital node */}
      <circle cx="180" cy="35" r="5" fill={COLORS.signal} />
      <path d="M 180 40 L 180 55" stroke={COLORS.line} strokeWidth="1" />
      
      {/* Right orbital nodes and icons */}
      <circle cx="290" cy="100" r="4.5" fill={COLORS.signal} opacity="0.8" />
      <path d="M 285 100 L 265 100" stroke={COLORS.structure} strokeWidth="1" />
      <rect x="310" y="90" width="20" height="20" rx="3" fill="none" stroke={COLORS.structure} strokeWidth="1.2" />
      
      {/* Bottom right */}
      <circle cx="260" cy="210" r="4" fill={COLORS.structure} opacity="0.6" />
      <rect x="280" y="200" width="18" height="18" rx="4" fill="none" stroke={COLORS.structure} strokeWidth="1" opacity="0.7" />
      
      {/* Bottom left */}
      <circle cx="90" cy="210" r="4" fill={COLORS.signal} opacity="0.7" />
      <path d="M 90 220 L 90 235" stroke={COLORS.line} strokeWidth="1" />
      
      {/* Left side orbital icon */}
      <circle cx="85" cy="110" r="4" fill={COLORS.structure} opacity="0.5" />
      <circle cx="60" cy="115" r="16" fill="none" stroke={COLORS.structure} strokeWidth="1.2" opacity="0.8" />
      
      {/* Connection paths */}
      <path d="M 150 115 L 140 95" stroke={COLORS.line} strokeWidth="0.8" opacity="0.6" />
      <path d="M 210 160 L 240 190" stroke={COLORS.line} strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}

export function ProcessIllustration({ className, style }: IllustrationProps) {
  return (
    <svg {...sharedSvgProps(className, style)}>
      {/* Background grid pattern (upper right) */}
      <g opacity="0.12">
        <circle cx="300" cy="50" r="2" fill={COLORS.signal} />
        <circle cx="320" cy="50" r="2" fill={COLORS.signal} />
        <circle cx="340" cy="50" r="2" fill={COLORS.signal} />
        <circle cx="300" cy="70" r="2" fill={COLORS.signal} />
        <circle cx="320" cy="70" r="2" fill={COLORS.signal} />
        <circle cx="340" cy="70" r="2" fill={COLORS.signal} />
        <circle cx="300" cy="90" r="2" fill={COLORS.signal} />
        <circle cx="320" cy="90" r="2" fill={COLORS.signal} />
        <circle cx="340" cy="90" r="2" fill={COLORS.signal} />
      </g>
      
      {/* Large central asterisk/star (dark navy) */}
      <g transform="translate(200, 130)">
        <path d="M 0 -85 L 0 85 M -73 -49 L 73 49 M 73 -49 L -73 49" stroke={COLORS.structure} strokeWidth="32" strokeLinecap="round" />
      </g>
      
      {/* Curved platform/base (green and navy layered) */}
      <g>
        {/* Navy base curve */}
        <path d="M 80 220 Q 180 260 320 220" stroke={COLORS.structure} strokeWidth="24" fill="none" strokeLinecap="round" />
        
        {/* Green accent curve on top */}
        <path d="M 85 215 Q 180 250 315 215" stroke={COLORS.signal} strokeWidth="16" fill="none" strokeLinecap="round" />
      </g>
      
      {/* Top orbital point (green) */}
      <circle cx="200" cy="25" r="6" fill={COLORS.signal} />
      
      {/* Orbital line to top point */}
      <path d="M 200 55 Q 220 35 200 25" stroke={COLORS.line} strokeWidth="1" fill="none" />
      
      {/* Right side accent dots */}
      <circle cx="280" cy="95" r="4" fill={COLORS.signal} opacity="0.8" />
      
      {/* Upper left accent */}
      <circle cx="100" cy="80" r="3.5" fill={COLORS.structure} opacity="0.5" />
      
      {/* Lower right accent */}
      <circle cx="290" cy="200" r="4" fill={COLORS.signal} opacity="0.6" />
      
      {/* Subtle connection line */}
      <path d="M 150 100 L 140 120" stroke={COLORS.line} strokeWidth="0.8" opacity="0.4" />
    </svg>
  );
}

export function ResearchEngineIllustration({ className, style }: IllustrationProps) {
  return (
    <svg {...sharedSvgProps(className, style)}>
      {/* Central lightbulb with radiating lines */}
      <g transform="translate(180, 140)">
        {/* Lightbulb filament glow - radiating lines */}
        <line x1="0" y1="-35" x2="0" y2="-50" stroke={COLORS.signal} strokeWidth="2.4" strokeLinecap="round" />
        <line x1="25" y1="-24" x2="35" y2="-35" stroke={COLORS.signal} strokeWidth="2.4" strokeLinecap="round" />
        <line x1="35" y1="0" x2="50" y2="0" stroke={COLORS.signal} strokeWidth="2.4" strokeLinecap="round" />
        <line x1="25" y1="24" x2="35" y2="35" stroke={COLORS.signal} strokeWidth="2.4" strokeLinecap="round" />
        <line x1="0" y1="35" x2="0" y2="50" stroke={COLORS.signal} strokeWidth="2.4" strokeLinecap="round" />
        <line x1="-25" y1="24" x2="-35" y2="35" stroke={COLORS.signal} strokeWidth="2.4" strokeLinecap="round" />
        <line x1="-35" y1="0" x2="-50" y2="0" stroke={COLORS.signal} strokeWidth="2.4" strokeLinecap="round" />
        <line x1="-25" y1="-24" x2="-35" y2="-35" stroke={COLORS.signal} strokeWidth="2.4" strokeLinecap="round" />
        
        {/* Lightbulb main sphere */}
        <circle cx="0" cy="-8" r="22" fill="none" stroke={COLORS.signal} strokeWidth="2.4" />
        <path d="M -14 8 L 14 8" stroke={COLORS.signal} strokeWidth="2" strokeLinecap="round" />
        
        {/* Lightbulb inner glow */}
        <circle cx="0" cy="-8" r="18" fill={COLORS.signal} opacity="0.15" />
      </g>

      {/* Outer orbital circle */}
      <circle cx="180" cy="140" r="115" fill="none" stroke={COLORS.line} strokeWidth="1.2" opacity="0.6" />

      {/* Node 01 - Top (Magnifying glass) */}
      <g>
        <circle cx="180" cy="20" r="24" fill="none" stroke={COLORS.line} strokeWidth="1.5" />
        <circle cx="180" cy="20" r="10" fill="none" stroke={COLORS.structure} strokeWidth="1.2" />
        <path d="M 187 27 L 195 35" stroke={COLORS.structure} strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="180" cy="12" r="2.5" fill={COLORS.signal} />
        <text x="180" y="58" textAnchor="middle" fontSize="10" fontWeight="600" fill={COLORS.signal} fontFamily="system-ui">01</text>
      </g>

      {/* Node 02 - Top right (Circular icon) */}
      <g>
        <circle cx="270" cy="60" r="24" fill="none" stroke={COLORS.line} strokeWidth="1.5" />
        <circle cx="270" cy="60" r="12" fill="none" stroke={COLORS.structure} strokeWidth="1.2" opacity="0.8" />
        <circle cx="270" cy="60" r="4" fill={COLORS.structure} opacity="0.5" />
        <circle cx="270" cy="48" r="2.5" fill={COLORS.signal} />
        <text x="270" y="98" textAnchor="middle" fontSize="10" fontWeight="600" fill={COLORS.signal} fontFamily="system-ui">02</text>
      </g>

      {/* Node 03 - Right (Chat/message icon) */}
      <g>
        <circle cx="310" cy="140" r="24" fill="none" stroke={COLORS.line} strokeWidth="1.5" />
        <rect x="300" y="130" width="20" height="18" rx="3" fill="none" stroke={COLORS.structure} strokeWidth="1.2" />
        <path d="M 304 142 L 315 142" stroke={COLORS.structure} strokeWidth="1" />
        <circle cx="310" cy="123" r="2.5" fill={COLORS.signal} />
        <text x="310" y="175" textAnchor="middle" fontSize="10" fontWeight="600" fill={COLORS.signal} fontFamily="system-us">03</text>
      </g>

      {/* Node 04 - Bottom right (Document icon) */}
      <g>
        <circle cx="270" cy="220" r="24" fill="none" stroke={COLORS.line} strokeWidth="1.5" />
        <rect x="262" y="212" width="16" height="18" rx="2" fill="none" stroke={COLORS.structure} strokeWidth="1.2" />
        <line x1="265" y1="216" x2="275" y2="216" stroke={COLORS.structure} strokeWidth="0.8" />
        <line x1="265" y1="220" x2="275" y2="220" stroke={COLORS.structure} strokeWidth="0.8" />
        <circle cx="270" cy="235" r="2.5" fill={COLORS.signal} />
        <text x="270" y="258" textAnchor="middle" fontSize="10" fontWeight="600" fill={COLORS.signal} fontFamily="system-ui">04</text>
      </g>

      {/* Node 05 - Bottom (Bar chart icon) */}
      <g>
        <circle cx="180" cy="260" r="24" fill="none" stroke={COLORS.line} strokeWidth="1.5" />
        <rect x="172" y="250" width="16" height="16" rx="2" fill="none" stroke={COLORS.structure} strokeWidth="1" />
        <rect x="174" y="260" width="2" height="6" fill={COLORS.signal} opacity="0.6" />
        <rect x="178" y="257" width="2" height="9" fill={COLORS.structure} opacity="0.5" />
        <rect x="182" y="262" width="2" height="4" fill={COLORS.signal} opacity="0.5" />
        <circle cx="180" cy="275" r="2.5" fill={COLORS.signal} />
      </g>

      {/* Node 06 - Bottom left (Grid/Map icon) */}
      <g>
        <circle cx="90" cy="220" r="24" fill="none" stroke={COLORS.line} strokeWidth="1.5" />
        <rect x="82" y="212" width="16" height="16" rx="2" fill="none" stroke={COLORS.structure} strokeWidth="1" />
        <line x1="90" y1="212" x2="90" y2="228" stroke={COLORS.structure} strokeWidth="0.8" />
        <line x1="82" y1="220" x2="98" y2="220" stroke={COLORS.structure} strokeWidth="0.8" />
        <circle cx="90" cy="235" r="2.5" fill={COLORS.signal} />
        <text x="90" y="258" textAnchor="middle" fontSize="10" fontWeight="600" fill={COLORS.signal} fontFamily="system-ui">05</text>
      </g>

      {/* Node 07 - Left (Idea/lightbulb icon) */}
      <g>
        <circle cx="50" cy="140" r="24" fill="none" stroke={COLORS.line} strokeWidth="1.5" />
        <circle cx="50" cy="133" r="6" fill="none" stroke={COLORS.structure} strokeWidth="1.2" />
        <path d="M 45 140 L 55 140 M 50 135 L 50 145" stroke={COLORS.structure} strokeWidth="1" strokeLinecap="round" />
        <circle cx="50" cy="123" r="2.5" fill={COLORS.signal} />
        <text x="50" y="175" textAnchor="middle" fontSize="10" fontWeight="600" fill={COLORS.signal} fontFamily="system-ui">06</text>
      </g>

      {/* Node 08 - Top left (Speech bubble) */}
      <g>
        <circle cx="90" cy="60" r="24" fill="none" stroke={COLORS.line} strokeWidth="1.5" />
        <rect x="82" y="52" width="16" height="12" rx="2" fill="none" stroke={COLORS.structure} strokeWidth="1.2" />
        <path d="M 85 65 L 87 72" stroke={COLORS.structure} strokeWidth="1" strokeLinecap="round" />
        <circle cx="90" cy="48" r="2.5" fill={COLORS.signal} />
        <text x="90" y="98" textAnchor="middle" fontSize="10" fontWeight="600" fill={COLORS.signal} fontFamily="system-ui">07</text>
      </g>

      {/* Node 09 - Upper right middle (Pin/location) */}
      <g>
        <circle cx="260" cy="80" r="20" fill="none" stroke={COLORS.line} strokeWidth="1.5" opacity="0.7" />
        <circle cx="260" cy="80" r="6" fill="none" stroke={COLORS.structure} strokeWidth="1" opacity="0.7" />
        <circle cx="260" cy="72" r="2.5" fill={COLORS.signal} opacity="0.8" />
        <text x="260" y="108" textAnchor="middle" fontSize="9" fontWeight="600" fill={COLORS.signal} fontFamily="system-ui" opacity="0.8">08</text>
      </g>

      {/* Connection paths from central lightbulb to nodes */}
      <path d="M 180 95 L 180 20" stroke={COLORS.line} strokeWidth="1" opacity="0.5" />
      <path d="M 220 125 L 270 60" stroke={COLORS.line} strokeWidth="1" opacity="0.4" />
      <path d="M 235 140 L 310 140" stroke={COLORS.line} strokeWidth="1" opacity="0.5" />
      <path d="M 220 155 L 270 220" stroke={COLORS.line} strokeWidth="1" opacity="0.4" />
      <path d="M 180 195 L 180 260" stroke={COLORS.line} strokeWidth="1" opacity="0.5" />
      <path d="M 140 155 L 90 220" stroke={COLORS.line} strokeWidth="1" opacity="0.4" />
      <path d="M 125 140 L 50 140" stroke={COLORS.line} strokeWidth="1" opacity="0.5" />
      <path d="M 140 125 L 90 60" stroke={COLORS.line} strokeWidth="1" opacity="0.4" />
      <path d="M 210 110 L 260 80" stroke={COLORS.line} strokeWidth="0.8" opacity="0.3" />

      {/* Subtle accent dots on connection lines */}
      <circle cx="180" cy="70" r="2" fill={COLORS.signal} opacity="0.3" />
      <circle cx="240" cy="90" r="1.5" fill={COLORS.signal} opacity="0.25" />
    </svg>
  );
}
