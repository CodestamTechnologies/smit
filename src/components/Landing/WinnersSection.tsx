import { Trophy, DollarSign, Crown, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const latestWinners = [
  { id: 1, name: "Alex M.", amount: "$12,450", game: "Mega Fortune", avatar: "👨" },
  { id: 2, name: "Sarah K.", amount: "$8,920", game: "Blackjack Pro", avatar: "👩" },
  { id: 3, name: "Mike R.", amount: "$15,680", game: "Roulette Royal", avatar: "👨‍💼" },
  { id: 4, name: "Emma L.", amount: "$6,340", game: "Lucky Sevens", avatar: "👩‍💻" },
  { id: 5, name: "David P.", amount: "$22,100", game: "Poker Master", avatar: "👨‍🎓" }
]

const topWinners = [
  { id: 1, name: "John D.", amount: "$125,000", rank: 1, avatar: "🤴" },
  { id: 2, name: "Lisa W.", amount: "$98,500", rank: 2, avatar: "👸" },
  { id: 3, name: "Robert M.", amount: "$87,200", rank: 3, avatar: "👨‍💼" },
  { id: 4, name: "Anna S.", amount: "$76,800", rank: 4, avatar: "👩‍🚀" },
  { id: 5, name: "Chris B.", amount: "$65,400", rank: 5, avatar: "👨‍🎨" }
]

interface Winner {
  id: number;
  name: string;
  amount: string;
  game?: string;
  rank?: number;
  avatar: string;
}

function WinnerCard({ winner, showGame = false }: { winner: Winner, showGame?: boolean }) {
  return (
    <div className="flex items-center space-x-3 p-3 glass-effect rounded-lg hover:bg-white/5 transition-colors">
      <div className="text-2xl">{winner.avatar}</div>
      <div className="flex-1">
        <div className="text-white font-semibold">{winner.name}</div>
        {showGame && <div className="text-gray-400 text-sm">{winner.game}</div>}
        {winner.rank && (
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400 text-sm">#{winner.rank}</span>
          </div>
        )}
      </div>
      <div className="text-green-400 font-bold">{winner.amount}</div>
    </div>
  )
}

export default function WinnersSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Latest Winners */}
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <TrendingUp className="h-6 w-6 text-green-400" />
              <h3 className="text-xl font-bold text-white">Latest Winners</h3>
            </div>
            <div className="space-y-3">
              {latestWinners.map((winner) => (
                <WinnerCard key={winner.id} winner={winner} showGame />
              ))}
            </div>
          </div>

          {/* Total Jackpot */}
          <div className="glass-effect rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <DollarSign className="h-8 w-8 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Total Jackpot</h3>
            </div>
            <div className="mb-6">
              <div className="text-4xl font-bold gold-gradient mb-2">$2,847,392</div>
              <div className="text-gray-400">Progressive Jackpot Pool</div>
            </div>
            <div className="mb-6">
              <div className="text-6xl mb-4">💰</div>
              <div className="text-gray-300 text-sm mb-4">
                Jackpot increases with every bet placed across all games
              </div>
            </div>
            <Button variant="gold" size="lg" className="w-full">
              <Trophy className="h-5 w-5 mr-2" />
              Play Now
            </Button>
          </div>

          {/* Top Winners */}
          <div className="glass-effect rounded-2xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Crown className="h-6 w-6 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Top Winners</h3>
            </div>
            <div className="space-y-3">
              {topWinners.map((winner) => (
                <WinnerCard key={winner.id} winner={winner} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}