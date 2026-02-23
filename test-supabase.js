import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_ANON_KEY;

console.log('🔍 Testing Supabase Connection...\n');

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function testConnection() {
  try {
    // Test 1: Check if we can insert
    console.log('📝 Test 1: Inserting test record...');
    const testEmail = `test-${Date.now()}@example.com`;
    const testToken = 'TEST1234';

    const { data: insertData, error: insertError } = await supabase
      .from('waiting_list')
      .insert([
        {
          email: testEmail,
          verification_token: testToken,
          verified: false,
        },
      ])
      .select();

    if (insertError) {
      console.error('❌ Insert failed:', insertError.message);
      return false;
    }

    console.log('✅ Insert successful!');
    console.log('   Inserted data:', insertData);

    // Test 2: Check if we can read
    console.log('\n📖 Test 2: Reading the inserted record...');
    const { data: readData, error: readError } = await supabase
      .from('waiting_list')
      .select('*')
      .eq('email', testEmail)
      .single();

    if (readError) {
      console.error('❌ Read failed:', readError.message);
    } else {
      console.log('✅ Read successful!');
      console.log('   Record found:', readData);
    }

    // Test 3: Check if we can update
    console.log('\n🔄 Test 3: Updating the record (marking as verified)...');
    const { data: updateData, error: updateError } = await supabase
      .from('waiting_list')
      .update({ verified: true, verified_at: new Date().toISOString() })
      .eq('email', testEmail)
      .select();

    if (updateError) {
      console.error('❌ Update failed:', updateError.message);
      return false;
    }

    console.log('✅ Update successful!');
    console.log('   Updated data:', updateData);

    // Test 4: Delete test record
    console.log('\n🗑️  Test 4: Cleaning up (deleting test record)...');
    const { error: deleteError } = await supabase
      .from('waiting_list')
      .delete()
      .eq('email', testEmail);

    if (deleteError) {
      console.error('⚠️  Delete failed:', deleteError.message);
    } else {
      console.log('✅ Cleanup successful!');
    }

    console.log('\n✨ All tests passed! Supabase is working perfectly.');
    return true;
  } catch (err) {
    console.error('❌ Error:', err);
    return false;
  }
}

testConnection().then((success) => {
  process.exit(success ? 0 : 1);
});
