import React from "react";
import { Flex,  Link, chakra } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
			w="full"
			bg="primary"
			p={50}
			alignItems="center"
			justifyContent="center">
			<Flex
				w="full"
				as="footer"
				flexDir={{
					base: "column",
					sm: "row",
				}}
				align="center"
				justify="center"
				px="6"
				py="4">
				<chakra.p
					py={{
						base: "2",
						sm: "0",
					}}
					color="whiteAlpha.800">
					Built by{"  "}
					<span>
						<Link
							href="https://www.linkedin.com/in/harshalpardeshi/"
							isExternal>
							Harshal Pardeshi,
						</Link>
					</span>{" "}
					2022 All rights reserved.
				</chakra.p>
			</Flex>
		</Flex>
  );
}
