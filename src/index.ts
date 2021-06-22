import { User } from "@interfaces/user";
import { logger } from "@utils/logger";
import "dotenv/config";

const main = async () => {
	const user: User = {
		id: 1,
		name: "John Doe",
		phone: "1234567890",
	};

	logger.info(JSON.stringify(user));
};

main().catch((err) => logger.error(err));
