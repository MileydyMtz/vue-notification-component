<template>
<div v-if="visible" :class="`notification ${type}`">
    <div class="notification-content">
        <img :src="icon" class="notification-icon" alt="notification-icon" />
        <span class="notification-message">{{ message }}</span>
    </div>
    <button class="close-button" @click="closeNotification">
        <img :src="closeIcon" class="close-icon" alt="close-icon" />
    </button>
</div>
</template>

<script>
import errorIcon from '../assets/error.svg';
import infoIcon from '../assets/info.svg';
import warningIcon from '../assets/warning.svg';
import successIcon from '../assets/success.svg';
import closeIcon from '../assets/close.svg';

export default {
    name: 'TheNotificacion',
    props: {
        type: {
            type: String,
            default: 'info',
        },
        message: {
            type: String,
            required: true,
        },
        autoClose: {
            type: Boolean,
            default: true,
        },
        autoCloseTime: {
            type: Number,
            default: 5000,
        },
    },
    data() {
        return {
            visible: true,
            icons: {
                error: errorIcon,
                info: infoIcon,
                warning: warningIcon,
                success: successIcon,
            },
            closeIcon: closeIcon,
        };
    },
    computed: {
        icon() {
            return this.icons[this.type];
        },
    },
    mounted() {
        if (this.autoClose) {
            setTimeout(() => {
                this.visible = false;
            }, this.autoCloseTime);
        }
    },
    methods: {
        closeNotification() {
            this.visible = false;
        },
    },
}
</script>

<style lang="scss">
.notification {
    align-items: flex-start;
    border-radius: 5px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.08);
    display: flex;
    justify-content: space-between;
    margin: 1em 0;
    padding: 1em;

    &.info {
        background-color: #e0f2fa;
        color: #0b6be9;
    }

    &.warning {
        background-color: #ffffe6;
        color: #6b460c;
    }

    &.error {
        background-color: #fdecec;
        color: #f10808;
    }

    &.success {
        background-color: #d9f0d7;
        color: #1b8e1a
    }

    .notification-content {
        display: flex;
        align-items: center;
    }

    .notification-icon {
        height: 30px;
        margin-right: 10px;
        width: 30px;
    }

    .notification-message {
        flex-grow: 1;
    }

    .close-button {
        background: transparent;
        border-radius: 8px;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: rgba(206, 206, 206, 0.199);
        }
    }

    .close-icon {
        height: 20px;
        width: 20px;
        
    }
}
</style>
