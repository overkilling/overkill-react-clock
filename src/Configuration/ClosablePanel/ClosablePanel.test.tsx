import { createTheme, ThemeProvider } from '@mui/material'
import { fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'
import { ClosablePanel } from './ClosablePanel'

describe('ClosablePanel component', () => {
  const Wrapper: React.FC = ({ children }) => (
    <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>
  )

  describe('className', () => {
    it('can be open', () => {
      render(
        <Wrapper>
          <ClosablePanel title="classtest" open={true}>
            Inside the panel
          </ClosablePanel>
        </Wrapper>
      )

      expect(screen.getByText('Inside the panel')).toBeVisible()
    })

    it('can be closed', () => {
      render(
        <Wrapper>
          <ClosablePanel title="classtest" open={false}>
            Inside the panel
          </ClosablePanel>
        </Wrapper>
      )

      expect(screen.queryByText('Inside the panel')).not.toBeInTheDocument()
    })
  })

  describe('button', () => {
    it('renders title', () => {
      render(
        <Wrapper>
          <ClosablePanel title="Some panel" open={false} />
        </Wrapper>
      )

      expect(screen.getByText('Some panel')).toBeInTheDocument()
      expect(screen.queryByTestId('icon')).not.toBeInTheDocument()
    })

    it('renders title with icon', () => {
      const Icon = () => <i data-testid="icon">Some Icon</i>
      render(
        <Wrapper>
          <ClosablePanel
            title="Some panel with icon"
            icon={<Icon />}
            open={false}
          />
        </Wrapper>
      )

      expect(screen.getByTestId('icon')).toBeInTheDocument()
      expect(screen.queryByText('Some panel with icon')).not.toBeInTheDocument()
    })
  })

  describe('children', () => {
    it('renders children inside', () => {
      render(
        <Wrapper>
          <ClosablePanel title="childrentest" open={true}>
            <p>This should be inside</p>
            <p>So should this</p>
          </ClosablePanel>
        </Wrapper>
      )

      expect(screen.getByText('This should be inside')).toBeInTheDocument()
      expect(screen.getByText('So should this')).toBeInTheDocument()
    })
  })

  describe('toggling', () => {
    it('closes an open panel by clicking the title', () => {
      render(
        <Wrapper>
          <ClosablePanel title="toggletest" open={true}>
            Inside the panel
          </ClosablePanel>
        </Wrapper>
      )

      fireEvent.click(screen.getAllByText('toggletest')[0])
      expect(screen.getByText('Inside the panel')).not.toBeVisible()
    })

    it('opens a closed panel by clicking the title', () => {
      render(
        <Wrapper>
          <ClosablePanel title="toggletest" open={false}>
            Inside the panel
          </ClosablePanel>
        </Wrapper>
      )

      fireEvent.click(screen.getByText('toggletest'))
      expect(screen.getByText('Inside the panel')).toBeVisible()
    })
  })
})
