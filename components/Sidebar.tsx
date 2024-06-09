'use client';
import React, { Fragment } from 'react';
import { LayoutDashboard, Newspaper, Folders, CreditCard, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command';

const Sidebar = () => {
    return (
        <Fragment>
            <Command className='bg-secondary rounded-none'>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <LayoutDashboard className='mr-2 h-4 w-4' />
                            <Link href="/dashboard">Dashboard</Link>
                        </CommandItem>
                        <CommandItem>
                            <Newspaper className='mr-2 h-4 w-4' />
                            <Link href="/posts">Posts</Link>
                        </CommandItem>
                        <CommandItem>
                            <Folders className='mr-2 h-4 w-4' />
                            <Link href="#">Categories</Link>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <User className='mr-2 h-4 w-4' />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <CreditCard className='mr-2 h-4 w-4' />
                            <span>Billing</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Settings className='mr-2 h-4 w-4' />
                            <span>Settings</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </Fragment>
    )
}

export default Sidebar;