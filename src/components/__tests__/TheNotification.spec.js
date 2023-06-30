import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheNotification from '@/components/TheNotification.vue'

describe('TheNotification', () => {
    it('renders properly', () => {
        const message = 'notificatión test';
        const wrapper = mount(TheNotification, { 
            props: { 
                message: message 
            } 
        })
        expect(wrapper.text()).toContain(message)
    })
    it('renders different types of notifications', () => {
        const types = ['info', 'warning', 'error', 'success' ]
        types.forEach(type => {
            const wrapper = mount(TheNotification, { 
            props: { 
                message: 'Testing', 
                type: type 
            }
        })
            expect(wrapper.html()).toContain(`notification ${type}`)
        })
    })

    it('auto closes after certain time', async () => {
        const wrapper = mount(TheNotification, { 
            props: { 
                message: 'Testing', 
                autoClose: true, 
                autoCloseTime: 100 
            } 
        })
        expect(wrapper.vm.visible).toBe(true)
        await new Promise(resolve => setTimeout(resolve, 200))
        expect(wrapper.vm.visible).toBe(false)
    })
    it('renders the correct icon for each notification type', () => {
        const types = ['info', 'warning', 'error', 'success']
        types.forEach(type => {
        const wrapper = mount(TheNotification, { 
            props: { 
            message: 'Testing', 
            type: type 
            }
        })
        expect(wrapper.html()).toContain(wrapper.vm.icon)
        })
    })

    it('closes the notification when the close button is clicked', async () => {
        const wrapper = mount(TheNotification, { 
        props: { 
            message: 'Testing', 
            autoClose: false
        } 
        })
        expect(wrapper.vm.visible).toBe(true)
        await wrapper.find('.close-button').trigger('click')
        expect(wrapper.vm.visible).toBe(false)
    })
});