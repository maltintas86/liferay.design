import { Flex, Link } from 'components/atoms'
import { AuthContainer } from 'components/molecules'
import React from 'react'
import styles from './styles.module.scss'

const NavItems = () => {
	const pages = ['Articles', 'Careers', 'Events', 'Team', 'Handbook']

	return (
		<Flex className={styles.entry} align="center">
			<Flex className={styles.items}>
				{pages.map(item => (
					<Link
						key={item}
						activeStyle={{
							color: 'white',
						}}
						to={'/' + item.toLowerCase()}
					>
						{item}
					</Link>
				))}
			</Flex>

			<AuthContainer />
		</Flex>
	)
}

export default NavItems
