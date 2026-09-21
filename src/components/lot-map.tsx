import { useNavigate } from "@tanstack/react-router";
import { LOTS, type Lot } from "@/data/site";
import { formatSqFt } from "@/lib/utils";

type LotMapProps = {
  selectedId?: number;
  onSelect?: (lot: Lot) => void;
  linkLots?: boolean;
};

export function LotMap({ selectedId, onSelect, linkLots = true }: LotMapProps) {
  const navigate = useNavigate();

  function handleSelect(lot: Lot) {
    if (onSelect) {
      onSelect(lot);
      return;
    }
    if (linkLots) {
      void navigate({ to: "/lots/$lotId", params: { lotId: String(lot.id) } });
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-paper-2">
      <svg
        viewBox="0 0 560 430"
        className="block w-full"
        style={{ aspectRatio: "560 / 430" }}
        role="img"
        aria-label="Parkview at Hostmark site plan, Phase 1 lots 1 through 8"
      >
        <rect width="560" height="430" fill="#eae4d6" />

        <rect x="0" y="0" width="560" height="28" fill="#1a2620" />
        <text
          x="280"
          y="18"
          textAnchor="middle"
          fill="#d4c4a8"
          fontSize="10"
          letterSpacing="2.4"
          fontFamily="Outfit, sans-serif"
        >
          WILDERNESS PARK
        </text>

        <polygon
          points="24,92 148,92 148,34 322,34 500,34 500,358 36,358 24,330 24,92"
          fill="#d9d3c6"
          stroke="#c4bbaa"
          strokeWidth="1"
        />

        <polygon
          points="322,34 500,34 500,92 406,92 406,250 360,306 322,92"
          fill="#c8bfb0"
        />
        <polygon points="286,92 406,92 406,190 286,190" fill="#c8bfb0" />
        <polygon
          points="286,190 406,190 406,250 360,306 286,306 286,190"
          fill="#c8bfb0"
        />
        <text
          x="394"
          y="160"
          textAnchor="middle"
          fill="#6f675c"
          fontSize="10"
          letterSpacing="1.6"
          fontFamily="Outfit, sans-serif"
        >
          PHASE 2
        </text>
        <text
          x="394"
          y="176"
          textAnchor="middle"
          fill="#6f675c"
          fontSize="8"
          fontFamily="Outfit, sans-serif"
        >
          separate ownership
        </text>
        <rect
          x="312"
          y="214"
          width="44"
          height="36"
          fill="#b5ab9a"
          stroke="#9a9080"
          strokeWidth="0.8"
        />

        <polygon points="176,306 286,306 286,358 198,358 176,330" fill="#b7c4b0" />
        <polygon points="322,34 500,34 500,92 322,92" fill="#9eaf9a" />
        <text
          x="410"
          y="68"
          textAnchor="middle"
          fill="#24352c"
          fontSize="8"
          letterSpacing="1.2"
          fontFamily="Outfit, sans-serif"
        >
          OPEN SPACE
        </text>
        <text
          x="228"
          y="338"
          textAnchor="middle"
          fill="#24352c"
          fontSize="8"
          letterSpacing="1.2"
          fontFamily="Outfit, sans-serif"
        >
          OPEN SPACE
        </text>

        <rect x="148" y="74" width="28" height="284" fill="#cfc8bb" />
        <rect x="140" y="62" width="52" height="22" fill="#cfc8bb" />
        <text
          x="162"
          y="200"
          textAnchor="middle"
          fill="#6f675c"
          fontSize="8"
          letterSpacing="1.4"
          transform="rotate(-90 162 200)"
          fontFamily="Outfit, sans-serif"
        >
          PRIVATE LANE
        </text>

        {LOTS.map((lot) => {
          const active = selectedId === lot.id;
          return (
            <g
              key={lot.id}
              role="link"
              tabIndex={0}
              aria-label={`${lot.name}, ${formatSqFt(lot.areaSqFt)} lot`}
              className="cursor-pointer"
              onClick={() => handleSelect(lot)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSelect(lot);
                }
              }}
            >
              <polygon
                points={lot.points}
                fill={active ? "#4d6b5c" : "#24352c"}
                stroke={active ? "#f3efe6" : "rgba(26,38,32,0.3)"}
                strokeWidth={active ? 2 : 1}
              />
              <text
                x={centroid(lot.points).x}
                y={centroid(lot.points).y + 4}
                textAnchor="middle"
                fill="#f3efe6"
                fontSize="13"
                fontFamily="Outfit, sans-serif"
                className="pointer-events-none"
              >
                {lot.id}
              </text>
              <title>{`${lot.name} · ${formatSqFt(lot.areaSqFt)} lot · ${formatSqFt(lot.homeSqFt)} concept home`}</title>
            </g>
          );
        })}

        {TREE_MARKS.map((t, i) => (
          <circle
            key={i}
            cx={t.x}
            cy={t.y}
            r={t.r}
            fill="#24352c"
            opacity={0.35}
          />
        ))}

        <rect x="0" y="368" width="560" height="62" fill="#b8b3a8" />
        <rect x="0" y="392" width="560" height="10" fill="#9e998e" />
        <text
          x="220"
          y="386"
          textAnchor="middle"
          fill="#3a3530"
          fontSize="11"
          letterSpacing="2.8"
          fontFamily="Outfit, sans-serif"
        >
          NE HOSTMARK STREET
        </text>
        <rect x="392" y="400" width="48" height="30" fill="#b8b3a8" />
        <text
          x="416"
          y="420"
          textAnchor="middle"
          fill="#3a3530"
          fontSize="8"
          letterSpacing="1.2"
          fontFamily="Outfit, sans-serif"
        >
          13th Ave NE
        </text>

        <polygon points="28,48 32,38 36,48" fill="#1c1916" />
        <text
          x="32"
          y="60"
          textAnchor="middle"
          fill="#1c1916"
          fontSize="8"
          fontFamily="Outfit, sans-serif"
        >
          N
        </text>
      </svg>
    </div>
  );
}

const TREE_MARKS = [
  { x: 360, y: 56, r: 8 },
  { x: 392, y: 50, r: 11 },
  { x: 430, y: 58, r: 9 },
  { x: 468, y: 48, r: 12 },
  { x: 488, y: 70, r: 7 },
  { x: 442, y: 78, r: 6 },
  { x: 40, y: 120, r: 7 },
  { x: 48, y: 188, r: 9 },
  { x: 42, y: 250, r: 6 },
  { x: 52, y: 310, r: 8 },
  { x: 460, y: 130, r: 10 },
  { x: 478, y: 180, r: 8 },
  { x: 452, y: 220, r: 7 },
  { x: 220, y: 328, r: 6 },
  { x: 248, y: 342, r: 8 },
];

function centroid(points: string) {
  const pairs = points.split(" ").map((p) => {
    const [x, y] = p.split(",").map(Number);
    return { x, y };
  });
  const n = pairs.length;
  const x = pairs.reduce((s, p) => s + p.x, 0) / n;
  const y = pairs.reduce((s, p) => s + p.y, 0) / n;
  return { x, y };
}
