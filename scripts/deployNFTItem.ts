import { toNano } from '@ton/core';
import { NFTItem } from '../build/NFTItem/NFTItem_NFTItem';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const nFTItem = provider.open(await NFTItem.fromInit());

    await nFTItem.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        null,
    );

    await provider.waitForDeploy(nFTItem.address);

    // run methods on `nFTItem`
}
