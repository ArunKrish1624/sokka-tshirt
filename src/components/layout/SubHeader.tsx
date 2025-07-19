import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button'; 
import { useStore } from '@/store/useStore';

export function Header() {
    const {
        isAuthenticated,
        user,
        setAuthModalOpen
    } = useStore();
    return (
        <div className="w-full bg-muted px-4 py-0 text-sm">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left: Logo + Address */}
                <div className="flex items-center space-x-3">
                    <img src="/images/Sokkawhite.png" alt="Logo" className="h-5 w-5" />
                    <span className="text-muted-foreground">#14, Thanjavur Main Rd, Tamil Nadu</span>
                </div>

                {/* Right: Login + Language */}
                <div className="flex items-center space-x-4">
                    {isAuthenticated ? (
                        <Link to="/profile">
                            <Button variant="ghost" size="sm">
                                {user?.name || 'Profile'}
                            </Button>
                        </Link>
                    ) : (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setAuthModalOpen(true)}
                        >
                            Login
                        </Button>
                    )}
                    <select className="bg-transparent text-muted-foreground focus:outline-none text-sm">
                        <option value="en">EN</option>
                        <option value="ta">TA</option>
                    </select>
                </div>
            </div>
        </div>
    );
}