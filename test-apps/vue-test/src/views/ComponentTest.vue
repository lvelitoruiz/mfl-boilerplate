<script setup lang="ts">
import { ref, reactive } from 'vue'
// Components loaded dynamically via main.ts

// Define the components for better TypeScript support
declare module 'vue' {
  interface ComponentCustomProperties {
    'ui-avatar': any
    'ui-icon': any
    'ui-status-badge': any
    'ui-status-icon': any
    'ui-text': any
    'contact-cell': any
    'contact-info-cell': any
    'dropdown-cell': any
    'order-id-cell': any
    'status-cell': any
    'table-header-cell': any
    'repair-orders-table': any
    'table-header': any
    'table-row': any
  }
}

// Component data
const contactInfo = reactive({
  name: "Jane Smith",
  phone: "+1-555-0456",
  email: "jane.smith@example.com"
})

const mockRepairData = reactive([
  {
    orderId: 'RO-001',
    customerName: 'John Doe',
    phone: '+1-555-0123',
    email: 'john.doe@example.com',
    status: 'in-progress',
    hasNotification: true
  },
  {
    orderId: 'RO-002', 
    customerName: 'Jane Smith',
    phone: '+1-555-0456',
    email: 'jane.smith@example.com',
    status: 'completed',
    hasNotification: false
  }
])

const columns = reactive([
  { key: 'orderId', label: 'Order ID', sortable: true },
  { key: 'customer', label: 'Customer', sortable: false },
  { key: 'contact', label: 'Contact', sortable: false },
  { key: 'status', label: 'Status', sortable: true }
])

// Event handlers
const handleValueChange = (event: CustomEvent) => {
  console.log('Value changed:', event.detail)
}

const handleSortChange = (event: CustomEvent) => {
  console.log('Sort changed:', event.detail)
}
</script>

<template>
  <div class="component-test" style="padding: 2rem; font-family: sans-serif;">
    <h1>UI Library Vue - Atomic Design Components</h1>
    
    <!-- Atoms -->
    <div style="margin-bottom: 2rem;">
      <h2>Atoms</h2>
      
      <div style="margin-bottom: 1rem;">
        <h3>Avatars</h3>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <ui-avatar 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
            alt="John Doe"
            size="sm"
          />
          <ui-avatar 
            initials="JD"
            size="md"
          />
          <ui-avatar 
            alt="Jane Smith"
            size="lg"
            fallback="icon"
          />
        </div>
      </div>

      <div style="margin-bottom: 1rem;">
        <h3>Icons</h3>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <ui-icon name="user" size="sm" />
          <ui-icon name="phone" size="md" />
          <ui-icon name="email" size="lg" />
        </div>
      </div>

      <div style="margin-bottom: 1rem;">
        <h3>Status Badges</h3>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <ui-status-badge status="pending" size="sm">Pending</ui-status-badge>
          <ui-status-badge status="in-progress" size="md">In Progress</ui-status-badge>
          <ui-status-badge status="completed" size="lg">Completed</ui-status-badge>
        </div>
      </div>

      <div style="margin-bottom: 1rem;">
        <h3>Status Icons</h3>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <ui-status-icon status="pending" size="sm" />
          <ui-status-icon status="in-progress" size="md" />
          <ui-status-icon status="completed" size="lg" />
        </div>
      </div>

      <div style="margin-bottom: 1rem;">
        <h3>Text</h3>
        <div style="display: flex; flex-direction: column; gap: 0.5rem;">
          <ui-text variant="h1" size="lg" weight="bold">Heading 1</ui-text>
          <ui-text variant="h2" size="md" weight="semibold">Heading 2</ui-text>
          <ui-text variant="body" size="sm">Body text example</ui-text>
        </div>
      </div>
    </div>

    <!-- Molecules -->
    <div style="margin-bottom: 2rem;">
      <h2>Molecules</h2>
      
      <div style="margin-bottom: 1rem;">
        <h3>Contact Cell</h3>
        <contact-cell 
          name="John Doe"
          phone="+1-555-0123"
          email="john.doe@example.com"
        />
      </div>

      <div style="margin-bottom: 1rem;">
        <h3>Contact Info Cell</h3>
        <contact-info-cell 
          :contact-info="contactInfo"
        />
      </div>

      <div style="margin-bottom: 1rem;">
        <h3>Order ID Cell</h3>
        <div style="display: flex; gap: 1rem;">
          <order-id-cell order-id="RO-001" :has-notification="true" />
          <order-id-cell order-id="RO-002" :has-notification="false" />
        </div>
      </div>

      <div style="margin-bottom: 1rem;">
        <h3>Status Cell</h3>
        <div style="display: flex; gap: 1rem;">
          <status-cell status="pending" />
          <status-cell status="in-progress" />
          <status-cell status="completed" />
        </div>
      </div>

      <div style="margin-bottom: 1rem;">
        <h3>Table Header Cell</h3>
        <div style="display: flex; gap: 1rem;">
          <table-header-cell label="Order ID" :sortable="true" @sort-change="handleSortChange" />
          <table-header-cell label="Customer" :sortable="false" />
          <table-header-cell label="Status" :sortable="true" sort-direction="asc" @sort-change="handleSortChange" />
        </div>
      </div>
    </div>

    <!-- Organisms -->
    <div style="margin-bottom: 2rem;">
      <h2>Organisms</h2>
      
      <div style="margin-bottom: 1rem;">
        <h3>Table Header</h3>
        <table-header :columns="columns" />
      </div>

      <div style="margin-bottom: 1rem;">
        <h3>Table Row</h3>
        <table-row 
          :data="mockRepairData[0]" 
          :columns="columns"
        />
      </div>

      <div style="margin-bottom: 1rem;">
        <h3>Repair Orders Table</h3>
        <repair-orders-table 
          :data="mockRepairData"
          :columns="columns"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.component-test {
  background-color: #f5f5f5;
  min-height: 100vh;
}
</style>