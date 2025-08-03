"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

// Profile Tab Component
function ProfileTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Information</CardTitle>
        <CardDescription>
          Update your profile details here
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="First Name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Last Name" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" />
        </div>
        <Button>Save Changes</Button>
      </CardContent>
    </Card>
  )
}

// Billing Tab Component
function BillingTab() {
  const [billingInfo, setBillingInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
    billingAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setBillingInfo(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing Information</CardTitle>
        <CardDescription>
          Manage your payment methods and billing details
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input 
              id="cardNumber" 
              name="cardNumber" 
              placeholder="1234 5678 9012 3456" 
              value={billingInfo.cardNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="expiryDate">Expiry Date</Label>
            <Input 
              id="expiryDate" 
              name="expiryDate" 
              placeholder="MM/YY" 
              value={billingInfo.expiryDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cvv">CVV</Label>
            <Input 
              id="cvv" 
              name="cvv" 
              placeholder="123" 
              value={billingInfo.cvv}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nameOnCard">Name on Card</Label>
            <Input 
              id="nameOnCard" 
              name="nameOnCard" 
              placeholder="Name on Card" 
              value={billingInfo.nameOnCard}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="billingAddress">Billing Address</Label>
          <Input 
            id="billingAddress" 
            name="billingAddress" 
            placeholder="Billing Address" 
            value={billingInfo.billingAddress}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input 
              id="city" 
              name="city" 
              placeholder="City" 
              value={billingInfo.city}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input 
              id="state" 
              name="state" 
              placeholder="State" 
              value={billingInfo.state}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input 
              id="zipCode" 
              name="zipCode" 
              placeholder="Zip Code" 
              value={billingInfo.zipCode}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <Button>Save Billing Information</Button>
      </CardContent>
    </Card>
  )
}

// Address Book Tab Component
function AddressBookTab() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Home",
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "USA",
      isDefault: true
    },
    {
      id: 2,
      name: "Work",
      address: "456 Business Ave",
      city: "New York",
      state: "NY",
      zipCode: "10002",
      country: "USA",
      isDefault: false
    }
  ])

  const [newAddress, setNewAddress] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewAddress(prev => ({ ...prev, [name]: value }))
  }

  const addAddress = () => {
    if (newAddress.name && newAddress.address) {
      const address = {
        id: addresses.length + 1,
        ...newAddress,
        isDefault: false
      }
      setAddresses([...addresses, address])
      setNewAddress({
        name: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        country: ""
      })
    }
  }

  const setDefaultAddress = (id: number) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })))
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add New Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="addressName">Address Name</Label>
              <Input 
                id="addressName" 
                name="name" 
                placeholder="Home, Work, etc." 
                value={newAddress.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="streetAddress">Street Address</Label>
              <Input 
                id="streetAddress" 
                name="address" 
                placeholder="Street Address" 
                value={newAddress.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input 
                id="city" 
                name="city" 
                placeholder="City" 
                value={newAddress.city}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <Input 
                id="state" 
                name="state" 
                placeholder="State" 
                value={newAddress.state}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input 
                id="zipCode" 
                name="zipCode" 
                placeholder="Zip Code" 
                value={newAddress.zipCode}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <Input 
                id="country" 
                name="country" 
                placeholder="Country" 
                value={newAddress.country}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <Button onClick={addAddress}>Add Address</Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Saved Addresses</h3>
        {addresses.map((address) => (
          <Card key={address.id}>
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <h4 className="font-medium">{address.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {address.address}, {address.city}, {address.state} {address.zipCode}, {address.country}
                </p>
                {address.isDefault && (
                  <span className="inline-block mt-1 px-2 py-1 text-xs bg-primary/10 text-primary rounded">
                    Default Address
                  </span>
                )}
              </div>
              <div className="flex space-x-2">
                {!address.isDefault && (
                  <Button variant="outline" size="sm" onClick={() => setDefaultAddress(address.id)}>
                    Set as Default
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Security Tab Component
function SecurityTab() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input id="currentPassword" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input id="newPassword" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input id="confirmPassword" type="password" />
          </div>
          <Button>Update Password</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Two-Factor Authentication</CardTitle>
          <CardDescription>
            Add an extra layer of security to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="font-medium">Two-Factor Authentication</p>
            <p className="text-sm text-muted-foreground">
              {twoFactorEnabled 
                ? "Two-factor authentication is enabled" 
                : "Two-factor authentication is disabled"}
            </p>
          </div>
          <Switch 
            checked={twoFactorEnabled} 
            onCheckedChange={setTwoFactorEnabled} 
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Sessions</CardTitle>
          <CardDescription>
            Manage your active sessions across devices
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-medium">Current Session</p>
              <p className="text-sm text-muted-foreground">New York, NY • Current device</p>
            </div>
            <Button variant="outline" size="sm">Current</Button>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <p className="font-medium">Chrome on Windows</p>
              <p className="text-sm text-muted-foreground">Los Angeles, CA • 2 days ago</p>
            </div>
            <Button variant="outline" size="sm">Revoke</Button>
          </div>
          <Button variant="outline" className="w-full">Sign Out All Devices</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">My Account</h1>
            <p className="text-muted-foreground">
              Manage your account settings and preferences
            </p>
          </div>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="address">Address Book</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="mt-6">
              <ProfileTab />
            </TabsContent>
            
            <TabsContent value="billing" className="mt-6">
              <BillingTab />
            </TabsContent>
            
            <TabsContent value="address" className="mt-6">
              <AddressBookTab />
            </TabsContent>
            
            <TabsContent value="security" className="mt-6">
              <SecurityTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
