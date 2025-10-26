import AuthRequired from "@/components/AuthRequired"
import Layout from "@/components/Layout"
import QuickStatCard from "@/components/QuickStatCard"
import SEO from "@/components/SEO"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/hooks/useAuth"
import { useFavorites } from "@/hooks/useFavorites"
import { useUser } from "@/hooks/useUser"
import { Heart, Mail, Ticket, User, Edit2, Save, X, Trash2, Lock, AlertTriangle } from "lucide-react"
import { useState, useEffect } from "react"
import { CountryCode } from "@/types/CountryCode"

const Profile = () => {
    const {user, isAuthenticated, logout} = useAuth()
    const {favorites} = useFavorites()
    const {updateUser, deleteUser, isUpdating, isDeleting} = useUser()

    console.log('User data:', user)
    console.log('Country:', user?.country)
    console.log('Country type:', typeof user?.country)
    
    const [isEditing, setIsEditing] = useState(false)
    const [editData, setEditData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        country: user?.country || CountryCode.DE
    })
    const [showDeleteDialog, setShowDeleteDialog] = useState(false)

    // Update editData when user changes
    useEffect(() => {
        if (user) {
            setEditData({
                name: user.name || '',
                email: user.email || '',
                country: user.country || CountryCode.DE
            })
        }
    }, [user])

   const getInitials = (name: string) => {
        const names = name.split(" ");
        return names.map((n) => n.charAt(0)).join("");
    }

    const handleEdit = () => {
        setEditData({
            name: user?.name || '',
            email: user?.email || '',
            country: user?.country || CountryCode.DE
        })
        setIsEditing(true)
    }

    const handleSave = () => {
        updateUser({
            name: editData.name,
            email: editData.email,
            country: editData.country
        })
        setIsEditing(false)
    }

    const handleCancel = () => {
        setIsEditing(false)
        setEditData({
            name: user?.name || '',
            email: user?.email || '',
            country: user?.country || CountryCode.DE
        })
    }

    const handleDeleteAccount = () => {
        deleteUser()
        setShowDeleteDialog(false)
        logout()
    }

    if (!isAuthenticated) {
        return (
            <AuthRequired 
                icon={User} 
                title="Profile" 
                description="You need to be logged in to manage your profile.">
            </AuthRequired>
        )
    }

    return (
        <Layout>
            <SEO 
                title="Profile - EventHub | Your Account Dashboard"
                description="Manage your EventHub profile, view your favorite events, and track your event activity. Your personal event dashboard."
                keywords="profile, account, dashboard, favorites, user profile, EventHub, personal events"
            />
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="space-y-8">
        
                    {/* Profile Header */}
                    <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-strong">
                        <CardContent className="p-8">
                            <div className="flex items-center space-x-6">
                                <Avatar className="h-20 w-20 border-4 border-primary-foreground/20">
                                    <AvatarFallback className="text-2xl font-bold bg-primary-foreground text-primary">
                                        {user?.name ? getInitials(user.name) : 'U'}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <h1 className="text-3xl font-bold mb-2">
                                        Welcome, {user?.name}!
                                    </h1>
                                    <div className="flex items-center space-x-4 text-primary-foreground/80">
                                    <div className="flex items-center space-x-2">
                                        <Mail className="h-4 w-4" />
                                        <span>{user?.email}</span>
                                    </div>
                                        <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground">
                                            {user?.isEmailVerified ? 'Verified' : 'Unverified'}
                                        </Badge>
                                </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <QuickStatCard
                            icon={Heart}
                            count={favorites.length}
                            label="Favoriten"
                            link="/favorites"
                            buttonText="Alle anzeigen"
                            btnVariant="outline"
                            btnDisabled={false}
                        />
                        <QuickStatCard
                            icon={Ticket}
                            count={0}
                            label="Tickets"
                            buttonText="Available soon"
                            btnVariant="secondary"
                            btnDisabled={true}
                        />
                    </div>
                    
                    {/* Profile Content */}
                    <div className="space-y-6">
                        {/* Personal Information */}
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <CardTitle className="flex items-center space-x-2">
                                        <User className="h-5 w-5" />
                                        <span>Personal Information</span>
                                    </CardTitle>
                                    {!isEditing && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={handleEdit}
                                            className="flex items-center space-x-2"
                                        >
                                            <Edit2 className="h-4 w-4" />
                                            <span>Edit</span>
                                        </Button>
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {isEditing ? (
                                    <div className="space-y-4">
                                        <div>
                                            <Label htmlFor="name">Name</Label>
                                            <Input
                                                id="name"
                                                value={editData.name}
                                                onChange={(e) => setEditData({...editData, name: e.target.value})}
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={editData.email}
                                                onChange={(e) => setEditData({...editData, email: e.target.value})}
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="country">Country</Label>
                                            <Select
                                                value={editData.country}
                                                onValueChange={(value) => setEditData({...editData, country: value as CountryCode})}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select country" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {Object.values(CountryCode).map((country) => (
                                                        <SelectItem key={country} value={country}>
                                                            {country}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="flex space-x-2">
                                            <Button
                                                onClick={handleSave}
                                                disabled={isUpdating}
                                                className="flex items-center space-x-2"
                                            >
                                                <Save className="h-4 w-4" />
                                                <span>{isUpdating ? 'Saving...' : 'Save'}</span>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                onClick={handleCancel}
                                                disabled={isUpdating}
                                                className="flex items-center space-x-2"
                                            >
                                                <X className="h-4 w-4" />
                                                <span>Cancel</span>
                                            </Button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-3">
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Name</Label>
                                            <p className="text-lg">{user?.name}</p>
                                        </div>
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Email</Label>
                                            <p className="text-lg">{user?.email}</p>
                                        </div>
                                        <div>
                                            <Label className="text-sm font-medium text-muted-foreground">Country</Label>
                                            <p className="text-lg">{user?.country || 'Not set'}</p>
                                        </div>
                                    </div>
                                )}
                            </CardContent>
                        </Card>

                        {/* Account Settings */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center space-x-2">
                                    <Lock className="h-5 w-5" />
                                    <span>Account Settings</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* Password Change - Coming Soon */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50 h-16">
                                        <div className="flex items-center space-x-2">
                                            <Lock className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-sm text-muted-foreground">Change Password</span>
                                        </div>
                                        <Badge variant="secondary">Coming Soon</Badge>
                                    </div>
                                </div>

                                {/* Account Deletion */}
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg bg-destructive/5 h-16">
                                        <div className="flex items-center space-x-2">
                                            <Trash2 className="h-4 w-4" />
                                            <p className="text-sm font-medium">Delete Account</p>
                                        </div>
                                        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                                            <DialogTrigger asChild>
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    className="flex items-center space-x-2"
                                                >
                                                    <span>Delete</span>
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle className="flex items-center space-x-2">
                                                        <AlertTriangle className="h-5 w-5 text-destructive" />
                                                        <span>Delete Account</span>
                                                    </DialogTitle>
                                                    <DialogDescription>
                                                        Are you sure you want to delete your account? This action cannot be undone.
                                                        All your data, including favorites and profile information, will be permanently removed.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <DialogFooter>
                                                    <Button
                                                        variant="outline"
                                                        onClick={() => setShowDeleteDialog(false)}
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button
                                                        variant="destructive"
                                                        onClick={handleDeleteAccount}
                                                        disabled={isDeleting}
                                                    >
                                                        {isDeleting ? 'Deleting...' : 'Delete Account'}
                                                    </Button>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile   