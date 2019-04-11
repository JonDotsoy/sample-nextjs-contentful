const contentful = require('contentful');

const client = contentful.createClient({
  space: '6ryxe22eim9l',
  accessToken: '7d92a7a0582c2d5a46f6a47e53172c5b22710147e07a340076898c4009e96421',
  environment: 'master',
});

(async () => {
  const page = await client.getEntry('1ameHeSPbyQyAgJRDdu0xW');
  debugger;
})();